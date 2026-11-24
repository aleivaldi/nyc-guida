import { h, mount } from './dom.js';
import { ctx, requestPosition } from './ctx.js';
import { gameState } from '../core/game.js';
import { distanceM } from '../core/geo.js';
import { distLabel, nearKind } from './common.js';
import { mapsPair } from './maps.js';

const TYPE_LABEL = {
  describe: 'Descrivi e cerca', 'photo-spot': 'Dov\'era il fotografo', 'then-now': 'Cos\'è cambiato',
  measure: 'Misura di squadra', message: 'Il messaggio', bet: 'Scommessa',
};
const PAGE = 12;
let shown = PAGE;
let shownAny = 8;
let shownSee = 5;

function row(m, sub, results, pos) {
  return h('li', { style: { display: 'grid', gap: '6px' } }, h('a', { href: `#/mission/${m.id}`, style: { display: 'block' } },
    h('span', { style: { display: 'block' } }, m.title),
    h('span', { class: 'st', style: { display: 'block', margin: 0 } }, `${sub} · ${TYPE_LABEL[m.type] ?? 'Sfida'}${results[m.id] ? ' · fatta' : ''}`)),
    pos ? mapsPair(pos, 'walking') : null);
}

export function renderVicino(sec) {
  document.documentElement.style.setProperty('--line', 'var(--taxi)');
  const results = gameState(ctx.raw).results;
  const gps = ctx.pos && Date.now() - ctx.posAt < 15 * 60 * 1000;
  const todayId = ctx.todayId();
  const fallback = ctx.origin(todayId);
  const origin = gps ? ctx.pos : fallback.pos;
  const { placed, anywhere } = ctx.missionsWithPlace();

  const near = placed
    .filter((x) => !results[x.m.id])
    .map((x) => ({ ...x, d: distanceM(origin, x.pos) }))
    .sort((a, b) => a.d - b.d);
  const free = anywhere.filter((x) => !results[x.m.id]);

  const seen = new Set();
  const see = ctx.DAYS.flatMap((d) => d.stops.flatMap((st) => st.nearby ?? []))
    .filter((n) => n.pos && !seen.has(n.text) && seen.add(n.text))
    .map((n) => ({ n, d: distanceM(origin, n.pos) }))
    .sort((a, b) => a.d - b.d);

  const where = gps ? 'Dalla vostra posizione' : `Senza posizione: parto dalla tappa in programma`;
  mount(h('section', { class: 'vinnie stack' },
    h('a', { class: 'back', href: '#/vinnie' }, '‹ Vinnie'),
    h('h1', {}, 'Sfide vicino a me'),
    h('p', { class: 'hint' }, `${where}. Le più vicine in alto.`),
    gps ? null : h('button', { class: 'btn btn-taxi', onclick: () => { requestPosition(renderVicino); renderVicino(sec); } }, 'Usa la mia posizione'),
    h('p', { class: 'label', id: 'vedere' }, 'Da vedere qui intorno'),
    h('div', { class: 'stack', style: { gap: '10px' } }, see.slice(0, shownSee).map(({ n, d }) => h('div', { class: 'next-card' },
      h('p', { class: 'label' }, `${nearKind(n.kind)}, ${distLabel(d)}`),
      h('p', { style: { margin: 0 } }, n.text),
      mapsPair(n.pos, 'walking')))),
    shownSee < see.length ? h('button', { class: 'btn', onclick: () => { shownSee += 5; renderVicino(sec); } }, `Altre cose da vedere (${see.length - shownSee})`) : null,
    h('p', { class: 'label' }, 'Sfide di Vinnie'),
    h('ul', { class: 'mission-list' }, near.slice(0, shown).map(({ m, area, d, pos }) => row(m, `${area}, ${distLabel(d)}`, results, pos))),
    shown < near.length ? h('button', { class: 'btn', onclick: () => { shown += PAGE; renderVicino(sec); } }, `Mostra altre (${near.length - shown})`) : null,
    h('p', { class: 'label' }, 'Valgono ovunque'),
    h('ul', { class: 'mission-list' }, free.slice(0, shownAny).map(({ m }) => row(m, 'Ovunque', results))),
    shownAny < free.length ? h('button', { class: 'btn', onclick: () => { shownAny += 10; renderVicino(sec); } }, `Altre sfide da strada (${free.length - shownAny})`) : null,
  ));
  if (sec === 'vedere') document.getElementById('vedere')?.scrollIntoView();
}
