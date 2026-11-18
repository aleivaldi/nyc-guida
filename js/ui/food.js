import { h, mount } from './dom.js';
import { ctx } from './ctx.js';
import { setLine, distLabel } from './common.js';
import { isOpen, closesAt } from '../core/hours.js';
import { directionsButton } from './maps.js';

const CATS = [
  ['colazione', 'Colazione'], ['pranzo', 'Pranzo'], ['cena', 'Cena'], ['snack', 'Snack'], ['tipico', 'Da provare'],
];
const TYPICAL = 'tipiche';

function defaultCat(minutes) {
  if (minutes < 630) return 'colazione';
  if (minutes >= 660 && minutes < 900) return 'pranzo';
  if (minutes >= 1080 && minutes < 1320) return 'cena';
  return 'snack';
}

export function renderFood(dayId, stopId) {
  setLine(dayId);
  const day = ctx.day(dayId);
  const clock = ctx.clock();
  const live = clock.tripDay === dayId;
  const minutes = ctx.minutesFor(dayId);
  const stop = (stopId && ctx.stop(dayId, stopId)) || ctx.stop(dayId, ctx.current(dayId).stopId);
  const origin = live && ctx.pos ? { pos: ctx.pos, gps: true } : { pos: stop.pos, gps: false };
  const all = ctx.DAYS.flatMap((d) => d.food ?? []);
  let cat = ctx.store.get('foodCat') ?? defaultCat(minutes);
  if (!all.some((f) => f.category === cat)) cat = CATS.find(([c]) => all.some((f) => f.category === c))?.[0] ?? cat;

  const strip = h('div', { class: 'food-strip' });
  const count = h('p', { class: 'count' });
  const pills = h('div', { class: 'pills' });

  const draw = () => {
    const cats = [...CATS.filter(([c]) => all.some((f) => f.category === c)), [TYPICAL, 'Cose tipiche']];
    pills.replaceChildren(...cats.map(([c, label]) =>
      h('button', { class: 'chip', 'aria-pressed': String(c === cat), onclick: () => { cat = c; ctx.store.set('foodCat', c); draw(); } }, label)));
    if (cat === TYPICAL) {
      strip.replaceChildren(...(ctx.COMMON.typical ?? []).map((t) => h('article', { class: 'food-card' },
        h('h2', {}, t.name), h('p', { class: 'order' }, t.what), h('p', { class: 'hint' }, t.where))));
      strip.scrollLeft = 0;
      count.textContent = 'Da assaggiare almeno una volta. Scorrete di lato.';
      return;
    }
    const list = ctx.near(origin.pos, all.filter((f) => f.category === cat)).slice(0, 8);
    strip.replaceChildren(...list.map(({ it, d }) => card(it, d, live ? clock.weekday : day.weekday, minutes, live, origin.gps)));
    strip.scrollLeft = 0;
    count.textContent = list.length
      ? `${list.length} posti, dal più vicino ${origin.gps ? 'a voi' : `a ${stop.name}`}. Scorrete di lato.`
      : 'Nessun posto in questa categoria qui vicino.';
  };
  draw();

  mount(h('section', { class: 'screen-fit' },
    h('a', { class: 'back', href: `#/stop/${dayId}/${stop.id}` }, stop.name),
    h('h1', { style: { margin: 0, fontSize: '28px' } }, 'Mangiare'),
    pills, strip, count));
}

function card(f, d, weekday, minutes, live, gps) {
  const open = live ? isOpen(f.hours, weekday, minutes) : null;
  const status = open === true
    ? h('span', { class: 'open' }, closesAt(f.hours, weekday, minutes) ? `aperto, chiude alle ${closesAt(f.hours, weekday, minutes)}` : 'aperto')
    : open === false ? h('span', { class: 'closed' }, 'chiuso adesso')
      : h('span', {}, hoursToday(f.hours, weekday));
  return h('article', { class: 'food-card' },
    f.img ? h('img', { class: 'food-img', src: f.img.src, alt: '', loading: 'lazy' }) : null,
    h('span', { class: 'type' }, f.type),
    h('h2', {}, f.name),
    f.rating ? rating(f.rating) : null,
    f.buzz ? h('p', { class: 'buzz' }, f.buzz) : null,
    h('p', { class: 'order' }, f.order),
    f.note ? h('p', { class: 'hint' }, f.note) : null,
    h('div', { class: 'row' }, h('span', {}, f.price), h('span', {}, gps ? distLabel(d) : `${distLabel(d)} dalla tappa`)),
    h('div', { class: 'row' }, status),
    directionsButton(f.pos));
}

function hoursToday(hours, weekday) {
  const r = hours?.[weekday];
  if (!r) return 'orari da verificare';
  return r.map(([a, b]) => `${a}–${b}`).join(', ');
}

function rating({ stars, count, source }) {
  const n = count ? ` su ${count.toLocaleString('it-IT')} recensioni` : '';
  return h('p', { class: 'rating', 'aria-label': `${stars} stelle${n}, ${source}` },
    h('span', { class: 'stars', style: { '--pct': `${(stars / 5) * 100}%` }, 'aria-hidden': 'true' }, '★★★★★'),
    h('b', {}, String(stars).replace('.', ',')),
    h('span', {}, `${source}${n}`));
}
