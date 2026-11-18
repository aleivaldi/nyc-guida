import { h, mount } from './dom.js';
import { ctx } from './ctx.js';
import { setLine, dayBullets, DAY_NAME } from './common.js';

export function renderDay(dayId = ctx.todayId()) {
  if (!ctx.DAYS.some((d) => d.id === dayId)) { location.hash = '#/day'; return; }
  const day = ctx.day(dayId);
  setLine(dayId);
  const cur = ctx.current(dayId);
  const curIdx = day.stops.findIndex((s) => s.id === cur.stopId);
  const live = ctx.clock().tripDay === dayId;

  mount(h('section', { class: 'screen-fit' },
    h('div', { class: 'days' }, dayBullets(dayId)),
    h('div', { class: 'day-head' }, h('h1', {}, `${DAY_NAME[dayId]}. ${day.title}`)),
    h('ol', { class: 'line-map' }, day.stops.map((s, i) => {
      const prev = day.stops[i - 1];
      const alt = s.kind === 'choice' && prev?.choiceGroup === s.choiceGroup;
      const cls = [
        s.kind === 'key' ? 'key' : 'optional',
        live && i < curIdx ? 'past' : '',
        live && i === curIdx ? 'current' : '',
        s.booked ? 'booked' : '',
      ].join(' ');
      return h('li', { class: cls },
        h('a', { href: `#/stop/${dayId}/${s.id}` },
          h('time', {}, alt ? '' : s.start),
          h('span', { class: 'node' }),
          h('span', { class: 'name' }, alt ? `oppure ${s.name}` : s.name)));
    })),
    h('a', { class: 'btn btn-quiet', href: '#/info', style: { flex: 'none' } }, 'Hotel, taxi, metro e mance')));
}
