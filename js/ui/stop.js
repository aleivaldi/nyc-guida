import { h, mount } from './dom.js';
import { ctx } from './ctx.js';
import { setLine, sign, missionFor, nearKind, duration, DAY_NAME } from './common.js';
import { directionsButton } from './maps.js';
import { gameState, kidsChoose } from '../core/game.js';
import { vinnieIcon } from './now.js';
import { resumePath } from './steps.js';

const EXTRA = [
  { when: 'late', label: 'In ritardo?' },
  { when: 'tired', label: 'Stanchi?' },
  { when: 'rain', label: 'Piove?' },
];

export function renderStop(dayId, stopId) {
  const day = ctx.day(dayId);
  const stop = ctx.stop(dayId, stopId);
  if (!stop) { location.hash = `#/day/${dayId}`; return; }
  setLine(dayId);
  const mission = missionFor(dayId, stopId);
  const tips = stop.tips ?? [];
  const base = tips.filter((t) => !t.when || t.when === 'always' || t.when === 'arrive');
  const tipList = h('ul', { class: 'tips' }, base.map((t) => h('li', {}, t.text)));
  const chips = EXTRA.filter((x) => tips.some((t) => t.when === x.when)).map((x) => {
    const chip = h('button', {
      class: 'chip', 'aria-pressed': 'false',
      onclick: () => {
        const on = chip.getAttribute('aria-pressed') !== 'true';
        chip.setAttribute('aria-pressed', String(on));
        tipList.querySelectorAll(`[data-when="${x.when}"]`).forEach((n) => n.remove());
        if (on) tips.filter((t) => t.when === x.when).forEach((t) => tipList.prepend(h('li', { 'data-when': x.when }, t.text)));
      },
    }, x.label);
    return chip;
  });

  mount(h('article', { class: 'stack' },
    stop.cover ? h('img', { class: 'cover', src: stop.cover.img, alt: '' }) : null,
    h('a', { class: 'back', href: `#/day/${dayId}` }, `${DAY_NAME[dayId]}, tutte le tappe`),
    sign(dayId, stop, { link: false }),
    h('div', { class: 'facts' },
      h('span', {}, stop.cost),
      h('span', {}, duration(stop.durationMin)),
      stop.kind === 'optional' ? h('span', {}, 'si può saltare') : null,
      stop.kind === 'move' ? h('span', {}, 'spostamento') : null),
    choiceBanner(day, stop),
    h('p', { class: 'hook' }, stop.hook),
    h('div', {}, h('p', { class: 'label' }, 'Cosa guardare davvero'),
      h('div', { class: 'look' }, stop.look.map((l, i) => [h('span', { class: 'k' }, ['Primo', 'Poi', 'E poi'][i] ?? ''), h('span', { class: 'v' }, l)]))),
    stop.steps?.length ? h('a', { class: 'btn btn-primary', href: `#/steps/${dayId}/${stopId}/${resumePath(stopId)}` }, 'Percorso passo passo') : null,
    mission ? h('a', { class: 'kids', href: `#/mission/${mission.id}` }, vinnieIcon(),
      h('span', {}, gameState(ctx.raw).results[mission.id] ? `Fatta: ${mission.title}` : mission.title)) : null,
    h('div', {},
      more('La storia', h('p', { class: 'story' }, stop.story)),
      tips.length ? more('Dritte', chips.length ? h('div', { class: 'pills', style: { marginBottom: '10px' } }, chips) : null, tipList) : null,
      stop.bagni ? more('Bagni', h('p', {}, stop.bagni.where), h('ul', { class: 'tips' }, h('li', {}, h('b', {}, 'Costo: '), stop.bagni.cost), h('li', {}, h('b', {}, 'Pulizia: '), stop.bagni.clean))) : null,
      stop.nearby?.length ? more('Qui intorno',
        h('ul', { class: 'tips' }, stop.nearby.map((n) => h('li', {}, h('b', { style: { display: 'block', fontSize: '14px', color: 'var(--ink-2)' } }, nearKind(n.kind)), n.text)))) : null),
    h('div', { class: 'btn-row' },
      h('a', { class: 'btn', href: `#/food/${dayId}/${stopId}` }, 'Mangiare'),
      directionsButton(stop.pos)),
  ));
}

function choiceBanner(day, stop) {
  if (stop.kind !== 'choice') return null;
  const group = day.stops.filter((s) => s.choiceGroup === stop.choiceGroup);
  const other = group.find((s) => s.id !== stop.id);
  const kids = kidsChoose(gameState(ctx.raw).results);
  const picked = ctx.store.get(`choice:${stop.choiceGroup}`);
  return h('div', { class: 'choice' },
    h('p', {}, kids
      ? `Oppure ${other.name}. Hanno battuto Vinnie: scelgono i bambini.`
      : `Oppure ${other.name}. Per ora è in vantaggio Vinnie: sceglie lui, ${group[0].name}.`),
    h('button', {
      class: 'btn', style: { marginTop: '10px', width: '100%', borderColor: 'currentColor' },
      onclick: () => { ctx.store.set(`choice:${stop.choiceGroup}`, stop.id); location.hash = '#/'; },
    }, picked === stop.id ? 'Scelta fatta' : `Andiamo qui`));
}

function more(title, ...content) {
  return h('details', { class: 'more' }, h('summary', {}, title), ...content);
}
