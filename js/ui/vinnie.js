import { h, mount, svg } from './dom.js';
import { ctx } from './ctx.js';
import { gameState, recordResult, setNames, score, rolesFor, isFinished } from '../core/game.js';
import { DAY_NAME } from './common.js';

const store = () => ctx.raw;
const TYPE_LABEL = {
  describe: 'Descrivi e cerca', 'photo-spot': 'Dov\'era il fotografo', 'then-now': 'Cos\'è cambiato',
  measure: 'Misura di squadra', message: 'Il messaggio', bet: 'Scommessa di Vinnie',
};

function missions() { return ctx.allMissions(gameState(store()).results); }

export function renderVinnie() {
  document.documentElement.style.setProperty('--line', 'var(--taxi)');
  const st = gameState(store());
  if (!st.names && !ctx.store.get('namesSkipped')) return renderNames();
  const all = missions();
  const sc = score(st.results);
  const todayId = ctx.todayId();
  const day = ctx.day(todayId);
  const today = all.filter((m) => m.dayId === todayId);
  const message = Object.keys(st.results).length ? day.vinnieMorning : (ctx.COMMON.vinnie.intro || day.vinnieMorning);

  mount(h('section', { class: 'vinnie stack' },
    h('div', { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
      h('img', { src: 'img/vinnie.svg', alt: '', width: 64, height: 64 }),
      h('h1', {}, 'Vinnie e la chiave della città')),
    h('p', { class: 'speech clamp', onclick: (e) => e.currentTarget.classList.toggle('open') }, finale(all, st) ?? message),
    h('div', { class: 'key', role: 'img', 'aria-label': `Chiave: ${sc.team} pezzi recuperati, ${sc.vinnie} tenuti da Vinnie` }, keySvg(all, st.results)),
    h('div', { class: 'score' }, h('span', {}, `Squadra ${sc.team}`), h('span', {}, `Vinnie ${sc.vinnie}`)),
    h('div', {}, h('p', { class: 'label' }, `${DAY_NAME[todayId]}, le missioni`),
      h('ul', { class: 'mission-list' }, today.map((m) => h('li', {},
        h('a', { href: `#/mission/${m.id}` }, m.title,
          h('span', { class: 'st' }, st.results[m.id] === 'team' ? 'vinta' : st.results[m.id] === 'vinnie' ? 'a Vinnie' : TYPE_LABEL[m.type] ?? '')))))),
    ctx.nextFreeBet(st.results) ? h('a', { class: 'btn btn-taxi', href: `#/mission/${ctx.nextFreeBet(st.results).id}` }, 'Una scommessa al volo') : null,
    h('button', { class: 'btn btn-quiet', onclick: renderNames }, st.names ? `Squadra: ${st.names.join(' e ')}` : 'Scrivete i nomi della squadra'),
    h('a', { class: 'btn btn-quiet', href: '#/credits' }, 'Crediti delle foto'),
  ));
}

function finale(all, st) {
  if (!isFinished(all.filter((m) => m.dayId), st.results)) return null;
  const sc = score(st.results);
  return sc.team >= sc.vinnie ? ctx.COMMON.vinnie.win : ctx.COMMON.vinnie.lose;
}

function keySvg(all, results) {
  const n = Math.max(all.length, 1);
  const x0 = 120;
  const w = (560 - x0) / n;
  const parts = all.map((m, i) => {
    const r = results[m.id];
    const fill = r === 'team' ? 'var(--taxi)' : 'none';
    const stroke = r === 'vinnie' ? 'var(--ink-2)' : r === 'team' ? 'var(--taxi)' : 'var(--rule)';
    const dash = r === 'vinnie' ? 'stroke-dasharray="6 5"' : '';
    const tooth = i % 3 === 2 ? `<rect x="${x0 + i * w + 2}" y="78" width="${w - 4}" height="26" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="3" ${dash}/>` : '';
    return `<rect x="${x0 + i * w + 2}" y="44" width="${w - 4}" height="32" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="3" ${dash}/>${tooth}`;
  }).join('');
  return svg(`<svg viewBox="0 0 580 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="46" fill="none" stroke="var(--taxi)" stroke-width="16"/>
    <circle cx="60" cy="60" r="14" fill="var(--taxi)"/>
    ${parts}</svg>`);
}

function renderNames() {
  const st = gameState(store());
  const a = h('input', { id: 'n1', autocomplete: 'off', value: st.names?.[0] ?? '' });
  const b = h('input', { id: 'n2', autocomplete: 'off', value: st.names?.[1] ?? '' });
  mount(h('section', { class: 'vinnie stack' },
    h('h1', {}, 'Chi gioca contro Vinnie?'),
    h('p', { class: 'hint' }, 'I nomi servono solo a dire a chi tocca cosa. Restano su questo telefono.'),
    h('label', { class: 'field', for: 'n1' }, 'Primo', a),
    h('label', { class: 'field', for: 'n2' }, 'Secondo', b),
    h('button', {
      class: 'btn btn-taxi',
      onclick: () => {
        const names = [a.value.trim(), b.value.trim()];
        if (names[0] && names[1]) setNames(store(), names);
        else ctx.store.set('namesSkipped', true);
        renderVinnie();
      },
    }, 'Si parte'),
  ));
}

export function renderMission(id) {
  document.documentElement.style.setProperty('--line', 'var(--taxi)');
  const st = gameState(store());
  const found = ctx.findMission(id, st.results);
  if (!found) { location.hash = '#/vinnie'; return; }
  const { m, i } = found;
  const [first, second] = rolesFor(i, st.names);
  const result = st.results[id];
  const hint = h('p', { class: 'hint', hidden: true }, m.parentHint);
  const stop = m.stopId ? ctx.stop(m.dayId, m.stopId) : null;

  const set = (w) => {
    recordResult(store(), id, result === w ? null : w);
    const lines = w === 'team' ? ctx.COMMON.vinnie.teamWins : ctx.COMMON.vinnie.vinnieWins;
    if (result !== w && lines?.length) ctx.store.set('lastLine', lines[Math.floor(Math.random() * lines.length)]);
    renderMission(id);
  };
  const line = result ? ctx.store.get('lastLine') : null;

  mount(h('section', { class: 'vinnie stack' },
    h('a', { class: 'back', href: stop ? `#/stop/${m.dayId}/${m.stopId}` : '#/vinnie' }, stop ? `‹ ${stop.name}` : '‹ Vinnie'),
    h('h1', {}, m.title),
    h('p', { class: 'hint' }, `${TYPE_LABEL[m.type] ?? ''}. Leggetelo ad alta voce.`),
    h('p', { class: 'read' }, m.read),
    m.img ? photo(m.img) : null,
    m.roles?.length ? h('div', { class: 'roles' },
      h('b', {}, cap(first)), h('span', {}, m.roles[0]),
      h('b', {}, cap(second)), h('span', {}, m.roles[1])) : null,
    m.vinnieBet ? h('p', { class: 'speech' }, m.vinnieBet) : null,
    m.parentHint ? h('div', {}, h('button', { class: 'chip', onclick: (e) => { hint.hidden = !hint.hidden; e.currentTarget.setAttribute('aria-pressed', String(!hint.hidden)); } }, 'Aiuto per il genitore'), hint) : null,
    line ? h('p', { class: 'speech' }, line) : null,
    h('div', { class: 'result' },
      h('button', { class: 'btn btn-taxi', 'aria-pressed': String(result === 'team'), onclick: () => set('team') }, 'Vince la squadra'),
      h('button', { class: 'btn', 'aria-pressed': String(result === 'vinnie'), onclick: () => set('vinnie') }, 'Vince Vinnie')),
    nextHere(m, st.results),
  ));
}

function nextHere(m, results) {
  if (!m.stopId) return null;
  const same = (ctx.day(m.dayId).missions ?? []).filter((x) => x.stopId === m.stopId);
  const i = same.findIndex((x) => x.id === m.id);
  const nxt = same.slice(i + 1).find((x) => !results[x.id]) ?? same.find((x) => x.id !== m.id && !results[x.id]);
  const stop = ctx.stop(m.dayId, m.stopId);
  const path = ctx.store.get(`steps:${m.stopId}`);
  const inRoute = stop?.steps?.length && path != null && JSON.stringify(stop.steps).includes(`"${m.id}"`);
  return h('div', { class: 'stack', style: { gap: '8px' } },
    inRoute ? h('a', { class: 'btn btn-primary', href: `#/steps/${m.dayId}/${m.stopId}/${path}` }, '‹ Torna al percorso') : null,
    nxt ? h('a', { class: 'btn btn-taxi', href: `#/mission/${nxt.id}` }, `Altra sfida qui: ${nxt.title} ›`)
      : h('a', { class: 'btn', href: `#/stop/${m.dayId}/${m.stopId}` }, 'Torna alla tappa'));
}

function photo(img) {
  return h('figure', { style: { margin: 0 } },
    h('button', {
      class: 'photo-btn', 'aria-label': 'Mostra la foto a tutto schermo',
      onclick: () => {
        const full = h('div', { class: 'photo-full', onclick: () => full.remove() }, h('img', { src: img.src, alt: '' }));
        document.body.append(full);
      },
    }, h('img', { src: img.src, alt: '' })),
    h('figcaption', { class: 'hint' }, 'Toccate la foto per mostrarla grande.'));
}

export function renderCredits() {
  const credits = [
    ...ctx.DAYS.flatMap((d) => d.stops.filter((s) => s.cover).map((s) => ({ what: s.name, credit: s.cover.credit }))),
    ...missions().filter((m) => m.img).map((m) => ({ what: m.title, credit: m.img.credit })),
    ...ctx.DAYS.flatMap((d) => (d.food ?? []).filter((f) => f.img).map((f) => ({ what: f.name, credit: f.img.credit }))),
  ];
  mount(h('section', { class: 'stack' },
    h('a', { class: 'back', href: '#/vinnie' }, 'Vinnie'),
    h('h1', { style: { margin: 0 } }, 'Crediti delle foto'),
    h('ul', { class: 'tips' }, credits.map((c) => h('li', {}, h('b', { style: { display: 'block' } }, c.what), c.credit)))));
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
