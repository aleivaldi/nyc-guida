import { toMin } from './time.js';
import { distanceM } from './geo.js';

const DEFAULT_RADIUS_M = 200;

export function locateStop(day, pos, minutes) {
  const { stops } = day;
  if (pos) {
    let best = null;
    for (const s of stops) {
      const d = distanceM(pos, s.pos);
      if (d < (s.radiusM ?? DEFAULT_RADIUS_M) && (!best || d < best.d)) best = { s, d };
    }
    if (best) return { stopId: best.s.id, by: 'gps' };
  }
  const started = stops.filter((s) => toMin(s.start) <= minutes);
  const stop = started.length ? started[started.length - 1] : stops[0];
  return { stopId: stop.id, by: 'time' };
}

export function activeStops(day, picks) {
  return day.stops.filter((s) => {
    if (s.kind !== 'choice') return true;
    const picked = picks[s.choiceGroup];
    if (picked) return picked === s.id;
    return day.stops.find((x) => x.choiceGroup === s.choiceGroup).id === s.id;
  });
}

export function lateness(day, stopId, minutes) {
  const i = day.stops.findIndex((s) => s.id === stopId);
  const next = day.stops[i + 1];
  if (i < 0 || !next) return { lateMin: 0, skip: [] };
  const lateMin = Math.max(0, minutes - toMin(next.start));
  if (!lateMin) return { lateMin: 0, skip: [] };
  const skip = [];
  let saved = 0;
  const optional = day.stops.slice(i + 1).filter((s) => s.kind === 'optional').reverse();
  for (const s of optional) {
    if (saved >= lateMin) break;
    skip.push(s.id);
    saved += s.durationMin;
  }
  return { lateMin, skip };
}
