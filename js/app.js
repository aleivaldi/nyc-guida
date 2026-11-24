import { route, start, current, render } from './ui/router.js';
import { requestPosition, ctx } from './ui/ctx.js';
import { renderNow } from './ui/now.js';
import { renderDay } from './ui/day.js';
import { renderStop } from './ui/stop.js';
import { renderSteps } from './ui/steps.js';
import { renderFood } from './ui/food.js';
import { renderVinnie, renderMission, renderCredits } from './ui/vinnie.js';
import { renderInfo } from './ui/info.js';
import { renderVicino } from './ui/vicino.js';

route('/', renderNow);
route('/day', () => renderDay());
route('/day/:id', renderDay);
route('/stop/:day/:stop', renderStop);
route('/steps/:day/:stop/:path', renderSteps);
route('/food/:day/:stop', renderFood);
route('/vinnie', renderVinnie);
route('/vicino', () => renderVicino());
route('/vicino/:sec', renderVicino);
route('/mission/:id', renderMission);
route('/credits', renderCredits);
route('/info', renderInfo);

const refreshIfLive = () => { if (current() === '/' || current().startsWith('/food')) render(); };

start();
requestPosition(refreshIfLive);

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') { requestPosition(refreshIfLive); refreshIfLive(); }
});
setInterval(() => { if (document.visibilityState === 'visible' && current() === '/') render(); }, 60000);

const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
const standalone = window.navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;
if (isIOS && !standalone && !ctx.store.get('installHintSeen')) {
  ctx.store.set('installHintSeen', true);
  const tip = document.createElement('div');
  tip.className = 'sheet';
  tip.innerHTML = '<div class="sheet-body"><p class="sheet-title">Mettetela sulla schermata Home</p><p>Toccate il pulsante Condividi di Safari, poi «Aggiungi alla schermata Home». Si aprirà come un\'app e funzionerà anche senza rete.</p><button class="btn btn-primary">Ho capito</button></div>';
  tip.querySelector('button').onclick = () => tip.remove();
  document.body.append(tip);
}

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => { /* offline cache unavailable; app still works online */ });
}
