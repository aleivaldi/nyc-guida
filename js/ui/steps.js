import { h, mount } from './dom.js';
import { ctx } from './ctx.js';
import { setLine, nextStop, walkTo } from './common.js';
import { mapsPair } from './maps.js';
import { gameState, kidsChoose } from '../core/game.js';

function flatten(steps, parents = [], out = []) {
  steps.forEach((s, i) => {
    const path = [...parents, i];
    out.push({ step: s, path, siblings: steps.length, trail: parents });
    if (s.steps?.length) flatten(s.steps, path, out);
  });
  return out;
}

function titleAt(steps, path) {
  const names = [];
  let level = steps;
  for (const i of path) { names.push(level[i].title); level = level[i].steps ?? []; }
  return names;
}

export function renderSteps(dayId, stopId, pathStr) {
  const stop = ctx.stop(dayId, stopId);
  if (!stop?.steps?.length) { location.hash = `#/stop/${dayId}/${stopId}`; return; }
  setLine(dayId);
  const flat = flatten(stop.steps);
  const key = pathStr.split('.').map(Number).join('.');
  let idx = flat.findIndex((f) => f.path.join('.') === key);
  if (idx < 0) idx = 0;
  ctx.store.set(`steps:${stopId}`, flat[idx].path.join('.'));
  const cur = flat[idx];
  const s = cur.step;
  const go = (i) => { location.hash = `#/steps/${dayId}/${stopId}/${flat[i].path.join('.')}`; };
  const crumbs = [stop.name, ...titleAt(stop.steps, cur.trail)];
  const posInLevel = cur.path[cur.path.length - 1] + 1;

  const head = h('button', { class: 'steps-head', onclick: () => showIndex(dayId, stopId, stop.steps, cur.path) },
    h('div', { class: 'crumb' }, crumbs.join(' › ')),
    h('div', { class: 'pos' }, `${posInLevel} di ${cur.siblings}, tocca per l'indice`),
    h('h1', {}, s.title));

  const body = h('div', { class: 'steps-body' },
    s.where ? h('p', { class: 'where' }, s.where) : null,
    s.look?.length ? h('ol', {}, s.look.map((l) => h('li', {}, l))) : null,
    s.tips?.length ? h('ul', { class: 'tips' }, s.tips.map((t) => h('li', {}, t))) : null,
    stop.choiceGroup && idx === firstOptionIdx(flat) ? prize(s.options) : null,
    s.options?.length ? h('div', { style: { display: 'grid', gap: '8px' } }, s.options.map((o) => h('div', { class: 'option' }, h('b', {}, o.label), o.text))) : null,
    s.steps?.length ? h('p', { class: 'hint' }, `Dentro: ${s.steps.map((c) => c.title).join(', ')}.`) : null);

  const last = idx === flat.length - 1;
  const day = ctx.day(dayId);
  const next = nextStop(day, stop);
  if (next && (last || stop.kind === 'move')) {
    body.append(h('div', { class: 'next-card' },
      h('p', { class: 'label' }, last ? `Poi: ${next.name}, alle ${next.start}` : `Destinazione: ${next.name}`),
      mapsPair(next.pos, walkTo(day, stop, next).mode)));
  }
  const foot = h('div', { class: 'steps-foot' },
    h('button', { class: 'btn', disabled: idx === 0, 'aria-label': 'Indietro', onclick: () => go(idx - 1) }, '‹'),
    last
      ? h('a', { class: 'btn btn-primary', href: next ? `#/stop/${dayId}/${next.id}` : `#/stop/${dayId}/${stopId}` }, next ? `Prossima tappa ›` : 'Fine percorso')
      : h('button', { class: 'btn btn-primary', onclick: () => go(idx + 1) }, s.steps?.length ? 'Entra' : 'Avanti'));

  const dots = h('div', { class: 'dots', 'aria-hidden': 'true' },
    flat.filter((f) => f.path.length === 1).map((f) => h('i', { class: f.path[0] === cur.path[0] ? 'on' : '' })));

  const screen = h('section', { class: 'steps' }, head, body, dots, foot);
  swipe(screen, () => (last ? next && (location.hash = `#/stop/${dayId}/${next.id}`) : go(idx + 1)), () => idx > 0 && go(idx - 1));
  mount(screen);
}

function swipe(el, onLeft, onRight) {
  let x0 = null;
  let y0 = null;
  el.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  el.addEventListener('touchend', (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? onLeft : onRight)();
    x0 = null;
  });
}

function showIndex(dayId, stopId, steps, curPath) {
  const sheet = h('div', { class: 'sheet', role: 'dialog', 'aria-label': 'Indice' },
    h('div', { class: 'sheet-body', style: { maxHeight: '80dvh', overflowY: 'auto' } },
      h('p', { class: 'sheet-title' }, 'Vai a'),
      h('ul', { class: 'index' }, steps.map((s, i) => h('li', {},
        h('a', { class: i === curPath[0] ? 'on' : '', href: `#/steps/${dayId}/${stopId}/${i}`, onclick: () => sheet.remove() }, `${i + 1}. ${s.title}`)))),
      h('a', { class: 'btn btn-quiet', href: `#/stop/${dayId}/${stopId}`, onclick: () => sheet.remove() }, 'Esci dal percorso')));
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.remove(); });
  document.body.append(sheet);
}

export function resumePath(stopId) {
  return ctx.store.get(`steps:${stopId}`) ?? '0';
}

function firstOptionIdx(flat) {
  return flat.findIndex((f) => f.step.options?.length);
}

function prize(options) {
  const kids = kidsChoose(gameState(ctx.raw).results);
  return h('div', { class: 'choice' }, kids
    ? 'La squadra è in vantaggio su Vinnie: scelgono i bambini.'
    : `Per ora è in vantaggio Vinnie, quindi sceglie lui: ${options[0].label.replace(/\s*\(.*\)/, "").toLowerCase()}.`);
}
