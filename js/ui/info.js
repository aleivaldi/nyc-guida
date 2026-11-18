import { h, mount } from './dom.js';
import { ctx } from './ctx.js';
import { directionsButton } from './maps.js';

export function renderInfo() {
  const hotel = ctx.COMMON.hotel;
  mount(h('section', { class: 'stack' },
    h('a', { class: 'back', href: '#/day' }, 'Giornata'),
    h('div', { class: 'sign' },
      h('div', { class: 'sign-name' }, h('span', { class: 'dot', 'aria-hidden': 'true' }), hotel.name),
      h('div', { class: 'sign-sub' }, hotel.address)),
    h('div', { class: 'btn-row' },
      directionsButton(hotel.pos, 'transit', 'Torna in hotel'),
      hotel.phone ? h('a', { class: 'btn', href: `tel:${hotel.phone.replace(/[^+\d]/g, '')}` }, 'Chiama') : null),
    hotel.taxiCard ? h('button', { class: 'btn btn-taxi', onclick: () => taxiCard(hotel) }, 'Mostra al tassista') : null,
    h('div', {}, (ctx.COMMON.general ?? []).map((g) => h('details', { class: 'more' }, h('summary', {}, g.topic), h('p', { class: 'story' }, g.text))))));
}

function taxiCard(hotel) {
  const card = h('div', { class: 'photo-full', style: { background: 'var(--taxi)', color: '#000', padding: '24px', flexDirection: 'column', gap: '16px', textAlign: 'center' }, onclick: () => card.remove() },
    h('p', { style: { fontSize: '30px', fontWeight: '800', lineHeight: '1.2' } }, hotel.taxiCard),
    h('p', { style: { fontSize: '16px' } }, 'Tocca per chiudere'));
  document.body.append(card);
}
