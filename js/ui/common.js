import { h } from './dom.js';
import { ctx } from './ctx.js';
import { toMin, fmtMin } from '../core/time.js';

export const DAY_LETTER = { fri: 'V', sat: 'S', sun: 'D', mon: 'L', tue: 'M' };
export const DAY_NAME = { fri: 'Venerdì', sat: 'Sabato', sun: 'Domenica', mon: 'Lunedì', tue: 'Martedì' };

export function setLine(dayId) {
  document.documentElement.style.setProperty('--line', `var(--${dayId})`);
}

export function duration(min) {
  if (min < 60) return `${min} min`;
  const hh = Math.floor(min / 60);
  const mm = min % 60;
  return mm ? `${hh} h ${mm}` : `${hh} h`;
}

export function stopTimes(stop) {
  const end = toMin(stop.start) + stop.durationMin;
  return `${stop.start}–${fmtMin(end)}`;
}

export function dayBullets(activeId, onPick) {
  const todayIdx = ctx.dayIndex(ctx.todayId());
  const live = !ctx.clock().preview;
  return ctx.DAYS.map((d, i) => {
    let cls = 'bullet';
    if (live) cls += i < todayIdx ? ' past' : i > todayIdx ? ' future' : '';
    else if (d.id !== activeId) cls += ' future';
    if (d.id === activeId) cls += ' today';
    return h('a', {
      class: cls, href: `#/day/${d.id}`, style: { '--c': `var(--${d.id})` },
      'aria-label': DAY_NAME[d.id],
      onclick: onPick ? (e) => { e.preventDefault(); onPick(d.id); } : null,
    }, DAY_LETTER[d.id]);
  });
}

export function sign(dayId, stop, { link = true } = {}) {
  const sub = stop.booked ?? `${stopTimes(stop)}, ${duration(stop.durationMin)}`;
  return h(link ? 'a' : 'div', {
    class: `sign ${stop.kind}`, href: link ? `#/stop/${dayId}/${stop.id}` : null,
  },
  h('div', { class: 'sign-name' }, h('span', { class: 'dot', 'aria-hidden': 'true' }), stop.name),
  h('div', { class: 'sign-sub' }, sub));
}

export function missionFor(dayId, stopId) {
  return (ctx.day(dayId).missions ?? []).find((m) => m.stopId === stopId);
}

export function distLabel(m) {
  const min = Math.max(1, Math.round((m * 1.25) / 80));
  return m < 1000 ? `${Math.round(m / 10) * 10} m, ${min} min` : `${(m / 1000).toFixed(1).replace('.', ',')} km, ${min} min`;
}

const NEAR_KIND = { curio: 'Curiosità', film: 'Set di un film', view: 'La vista', famous: 'Facce note', food: 'Da assaggiare' };
export function nearKind(k) { return NEAR_KIND[k] ?? 'Curiosità'; }
