import { DAYS, COMMON } from '../../data/index.js';
import VICINO from '../../data/vicino.js';
import { nyNow, tripDayId, toMin } from '../core/time.js';
import { locateStop, activeStops } from '../core/schedule.js';
import { safeStorage } from '../core/storage.js';
import { distanceM } from '../core/geo.js';

function browserStorage() {
  try { return window.localStorage; } catch { return null; }
}

const raw = safeStorage(browserStorage());
const store = {
  get(k) { try { return JSON.parse(raw.getItem(k)); } catch { return null; } },
  set(k, v) { raw.setItem(k, JSON.stringify(v)); },
};

export const ctx = {
  DAYS,
  COMMON,
  pos: null,
  posAt: 0,
  store,
  raw,

  clock() {
    const n = nyNow();
    const tripDay = tripDayId(n.weekday, n.inNY);
    return { ...n, tripDay, preview: !tripDay };
  },

  todayId() {
    const c = this.clock();
    return c.tripDay ?? store.get('previewDay') ?? DAYS[0].id;
  },

  setPreviewDay(id) { store.set('previewDay', id); },

  day(id) { return DAYS.find((d) => d.id === id) ?? DAYS[0]; },

  activeDay(id) {
    const day = this.day(id);
    const picks = {};
    day.stops.forEach((s) => { if (s.choiceGroup) picks[s.choiceGroup] = store.get(`choice:${s.choiceGroup}`); });
    return { ...day, stops: activeStops(day, picks) };
  },

  dayIndex(id) { return DAYS.findIndex((d) => d.id === id); },

  stop(dayId, stopId) { return this.day(dayId).stops.find((s) => s.id === stopId); },

  minutesFor(dayId) {
    const c = this.clock();
    if (c.tripDay === dayId) return c.minutes;
    return toMin(this.day(dayId).stops[0].start);
  },

  here(dayId) { return store.get(`here:${dayId}`); },

  setHere(dayId, stopId) { store.set(`here:${dayId}`, { stopId, at: this.clock().minutes }); },

  current(dayId) {
    const day = this.activeDay(dayId);
    const live = this.clock().tripDay === dayId;
    const gps = live && this.pos ? locateStop(day, this.pos, this.clock().minutes) : null;
    if (gps?.by === 'gps') return gps;
    const manual = this.here(dayId);
    if (manual && day.stops.some((s) => s.id === manual.stopId)) {
      const byTime = locateStop(day, null, this.minutesFor(dayId));
      const manualIdx = day.stops.findIndex((s) => s.id === manual.stopId);
      const timeIdx = day.stops.findIndex((s) => s.id === byTime.stopId);
      return manualIdx >= timeIdx || !live ? { stopId: manual.stopId, by: 'manual' } : byTime;
    }
    return locateStop(day, null, this.minutesFor(dayId));
  },

  origin(dayId) {
    if (this.pos && this.clock().tripDay === dayId) return { pos: this.pos, gps: true };
    const cur = this.current(dayId);
    return { pos: this.stop(dayId, cur.stopId).pos, gps: false };
  },

  near(origin, items, maxM = Infinity) {
    return items
      .filter((it) => it.pos)
      .map((it) => ({ it, d: distanceM(origin, it.pos) }))
      .filter((x) => x.d <= maxM)
      .sort((a, b) => a.d - b.d);
  },

  allBets() { return [...(COMMON.bets ?? []), ...VICINO]; },

  allMissions(results = {}) {
    const day = DAYS.flatMap((d) => (d.missions ?? []).map((m) => ({ ...m, dayId: d.id })));
    const extra = this.allBets().filter((b) => results[b.id]).map((b) => ({ ...b, dayId: null }));
    return [...day, ...extra];
  },

  findMission(id, results = {}) {
    const list = this.allMissions(results);
    const i = list.findIndex((m) => m.id === id);
    if (i >= 0) return { m: list[i], i };
    const bet = this.allBets().find((b) => b.id === id);
    return bet ? { m: { ...bet, dayId: null }, i: list.length } : null;
  },

  nextFreeBet(results = {}) {
    return this.allBets().find((b) => !b.pos && !results[b.id]) ?? null;
  },

  // Tutte le sfide con un luogo (proprie o della tappa) e quelle valide ovunque.
  missionsWithPlace() {
    const placed = [];
    const anywhere = [];
    DAYS.forEach((d) => (d.missions ?? []).forEach((m) => {
      const st = m.stopId ? d.stops.find((s) => s.id === m.stopId) : null;
      if (st?.pos) placed.push({ m: { ...m, dayId: d.id }, pos: st.pos, area: st.name });
      else anywhere.push({ m: { ...m, dayId: d.id }, area: 'Ovunque' });
    }));
    this.allBets().forEach((b) => {
      if (b.pos) placed.push({ m: { ...b, dayId: null }, pos: b.pos, area: b.area });
      else anywhere.push({ m: { ...b, dayId: null }, area: 'Ovunque' });
    });
    return { placed, anywhere };
  },
};

export function requestPosition(onDone) {
  if (!('geolocation' in navigator)) return;
  navigator.geolocation.getCurrentPosition(
    (p) => { ctx.pos = [p.coords.latitude, p.coords.longitude]; ctx.posAt = Date.now(); onDone?.(); },
    () => { /* denied or unavailable: the app falls back to the schedule */ },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
  );
}
