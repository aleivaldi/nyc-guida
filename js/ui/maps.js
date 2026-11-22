import { h } from './dom.js';

const KEY = 'mapsApp';

export function directionsUrl([lat, lon], mode, app) {
  if (app === 'apple') return `https://maps.apple.com/?daddr=${lat},${lon}&dirflg=${mode === 'transit' ? 'r' : 'w'}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}&travelmode=${mode === 'transit' ? 'transit' : 'walking'}`;
}

function readApp() {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

function open(pos, mode, app) {
  try { localStorage.setItem(KEY, app); } catch { /* private mode: choice not remembered */ }
  const url = directionsUrl(pos, mode, app);
  if (!window.open(url, '_blank')) window.location.href = url;
}

export function directionsButton(pos, mode = 'walking', label = 'Indicazioni') {
  return h('button', {
    class: 'btn btn-primary',
    onclick: () => {
      const app = readApp();
      if (app) open(pos, mode, app);
      else chooser(pos, mode);
    },
  }, label);
}

function chooser(pos, mode) {
  const sheet = h('div', { class: 'sheet', role: 'dialog', 'aria-label': 'Con quale app?' },
    h('div', { class: 'sheet-body' },
      h('p', { class: 'sheet-title' }, 'Apri le indicazioni con'),
      h('button', { class: 'btn btn-primary', onclick: () => open(pos, mode, 'google') }, 'Google Maps'),
      h('button', { class: 'btn', onclick: () => open(pos, mode, 'apple') }, 'Mappe di Apple'),
      h('button', { class: 'btn btn-quiet', onclick: () => sheet.remove() }, 'Annulla')));
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.remove(); });
  document.body.append(sheet);
}

export function mapsPair(pos, mode = 'walking') {
  return h('div', { class: 'btn-row maps-pair' },
    h('a', { class: 'btn btn-primary', href: directionsUrl(pos, mode, 'google'), target: '_blank', rel: 'noopener' }, 'Google Maps'),
    h('a', { class: 'btn', href: directionsUrl(pos, mode, 'apple'), target: '_blank', rel: 'noopener' }, 'Mappe Apple'));
}
