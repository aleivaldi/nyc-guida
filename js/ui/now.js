import { h, mount, arrow } from './dom.js';
import { ctx, requestPosition } from './ctx.js';
import { setLine, dayBullets, sign, missionFor, distLabel, nearKind, DAY_NAME } from './common.js';
import { toMin, fmtMin } from '../core/time.js';
import { lateness } from '../core/schedule.js';
import { distanceM, bearingDeg, walkMin } from '../core/geo.js';
import { sunsetMin } from '../core/sun.js';
import { directionsButton } from './maps.js';
import { gameState } from '../core/game.js';

export function renderNow() {
  const dayId = ctx.todayId();
  const day = ctx.activeDay(dayId);
  const clock = ctx.clock();
  const live = clock.tripDay === dayId;
  const minutes = ctx.minutesFor(dayId);
  setLine(dayId);

  const cur = ctx.current(dayId);
  const idx = day.stops.findIndex((s) => s.id === cur.stopId);
  const stop = day.stops[idx];
  const next = day.stops[idx + 1] ?? null;
  const origin = ctx.origin(dayId);

  mount(h('section', { class: 'screen-fit' },
    header(dayId, day, minutes, live),
    lateBanner(day, stop, minutes, live),
    sign(dayId, stop),
    h('div', { class: 'now-body' },
      h('p', { class: 'hook' }, stop.hook),
      h('div', { class: 'look' }, h('span', { class: 'k' }, 'Guarda'), h('span', { class: 'v' }, stop.look[0])),
      kidsRow(dayId, stop),
      around(dayId, stop, origin)),
    nextBlock(dayId, day, stop, next, origin),
  ));
}

function header(dayId, day, minutes, live) {
  const first = toMin(day.stops[0].start);
  const lastStop = day.stops[day.stops.length - 1];
  const end = toMin(lastStop.start) + lastStop.durationMin;
  const pct = Math.min(100, Math.max(0, ((minutes - first) / (end - first)) * 100));
  const now = new Date();
  const sunset = fmtMin(sunsetMin({ month: now.getMonth() + 1, day: now.getDate() }, 40.75, -73.98));
  const keyLeft = day.stops.filter((s) => s.kind === 'key' && toMin(s.start) > minutes).length;
  const left = end - minutes;

  return h('div', {},
    h('div', { class: 'days' },
      dayBullets(dayId, live ? null : (id) => { ctx.setPreviewDay(id); renderNow(); }),
      h('div', { class: 'meta' }, live ? `tramonto ${sunset}` : 'anteprima', h('br'), DAY_NAME[dayId])),
    h('div', { class: 'progress', style: { marginTop: '12px' }, role: 'img', 'aria-label': `Giornata al ${Math.round(pct)}%` },
      h('i', { style: { width: `${live ? pct : 0}%` } })),
    h('div', { class: 'progress-label' },
      h('span', {}, live && left > 0 ? `ancora ${Math.floor(left / 60)} h ${left % 60} min` : day.title),
      h('span', {}, live ? (keyLeft ? `${keyLeft} tappe chiave da fare` : 'ultime tappe') : `fino alle ${fmtMin(end)}`)));
}

function lateBanner(day, stop, minutes, live) {
  if (!live) return null;
  const { lateMin, skip } = lateness(day, stop.id, minutes);
  if (lateMin < 15) return null;
  const names = skip.map((id) => day.stops.find((s) => s.id === id).name);
  const advice = names.length
    ? `Saltate ${names.join(' e ')}.`
    : 'Le prossime tappe sono tutte importanti: accorciate questa.';
  return h('div', { class: 'alert', role: 'status' }, `In ritardo di ${lateMin} minuti`, h('small', {}, advice));
}

function kidsRow(dayId, stop) {
  const m = missionFor(dayId, stop.id) ?? walkingBet(dayId);
  if (!m) return null;
  const done = gameState(ctx.raw).results[m.id];
  return h('a', { class: 'kids', href: `#/mission/${m.id}` },
    vinnieIcon(),
    h('span', {}, done ? `Fatta: ${m.title}` : m.title));
}

function walkingBet(dayId) {
  const results = gameState(ctx.raw).results;
  return (ctx.day(dayId).missions ?? []).find((m) => m.type === 'bet' && !m.stopId && !results[m.id]);
}

export function vinnieIcon() {
  const i = new Image();
  i.src = 'img/vinnie.svg';
  i.alt = '';
  return i;
}

function around(dayId, stop, origin) {
  const day = ctx.day(dayId);
  const items = [
    ...(stop.nearby ?? []).map((n) => ({ ...n, label: nearKind(n.kind), text: n.text })),
    ...(day.food ?? []).map((f) => ({ pos: f.pos, label: `${f.type}, ${f.name}`, text: f.order, food: true })),
  ];
  const close = ctx.near(origin.pos, items, 500).slice(0, 5);
  if (!close.length) return null;
  return h('div', {},
    h('p', { class: 'label' }, 'Intorno a voi'),
    h('div', { class: 'strip' }, close.map(({ it, d }) => h(it.food ? 'a' : 'div', {
      class: 'near-card', href: it.food ? `#/food/${dayId}/${stop.id}` : null, style: it.food ? { textDecoration: 'none' } : null,
    }, h('b', {}, origin.gps ? `${it.label}, ${distLabel(d)}` : it.label), it.text))));
}

function nextBlock(dayId, day, stop, next, origin) {
  if (!next) {
    const hotel = ctx.COMMON.hotel;
    const tomorrow = ctx.DAYS[ctx.dayIndex(dayId) + 1];
    return h('div', { class: 'next' },
      h('div', { class: 'next-line' },
        h('div', {}, h('b', {}, 'Si torna in hotel'),
          h('small', {}, tomorrow ? `Domani: ${tomorrow.title}` : 'Buon viaggio di ritorno'))),
      directionsButton(hotel.pos, 'transit', 'Indicazioni per l\'hotel'));
  }
  const walk = (day.walks ?? []).find((w) => w.from === stop.id && w.to === next.id);
  const d = distanceM(origin.pos, next.pos);
  const mins = walk?.minutes ?? walkMin(d);
  const how = walk?.how ?? (mins > 25 ? 'meglio la metro' : 'a piedi');
  const howEl = h('small', { class: 'how', onclick: (e) => e.currentTarget.classList.toggle('open') }, `${mins} min, ${how}`);
  return h('div', { class: 'next' },
    h('div', { class: 'next-line' },
      arrow(bearingDeg(origin.pos, next.pos)),
      h('div', {},
        h('a', { href: `#/stop/${dayId}/${next.id}`, style: { textDecoration: 'none' } }, h('small', {}, `Poi, alle ${next.start}`), h('b', {}, next.name)),
        howEl)),
    h('div', { class: 'btn-row' },
      directionsButton(next.pos, walk?.mapsMode ?? (mins > 25 ? 'transit' : 'walking')),
      h('button', { class: 'btn', onclick: () => { ctx.setHere(dayId, next.id); requestPosition(); renderNow(); } }, 'Siamo arrivati')));
}
