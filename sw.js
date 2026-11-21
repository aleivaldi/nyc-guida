const VERSION = '58710a37568a';
const FILES = ["./","css/app.css","data/common.js","data/fri.js","data/index.js","data/mon.js","data/sat.js","data/sun.js","data/tue.js","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","img/amnh.webp","img/arrivo.webp","img/bridge.webp","img/bryant.webp","img/bull.webp","img/chinatown.webp","img/cp.webp","img/dumbo.webp","img/ferry.webp","img/food-fri-f-joes.webp","img/food-fri-f-juniors.webp","img/food-fri-f-shakeshack.webp","img/food-fri-f-ticktock.webp","img/food-mon-f-brooklyndiner.webp","img/food-mon-f-ellens.webp","img/food-mon-f-gctfood.webp","img/food-mon-f-halal.webp","img/food-mon-f-juniors.webp","img/food-mon-f-lostacos.webp","img/food-mon-f-magnolia.webp","img/food-sat-barney.webp","img/food-sat-foodgallery.webp","img/food-sat-grayspapaya.webp","img/food-sat-joes.webp","img/food-sat-juniors.webp","img/food-sat-levain.webp","img/food-sat-shakeshack-uws.webp","img/food-sat-winter-village.webp","img/food-sat-zabars.webp","img/food-sun-ellens.webp","img/food-sun-grimaldis.webp","img/food-sun-jacques-torres.webp","img/food-sun-joes-fulton.webp","img/food-sun-johns.webp","img/food-sun-juliana.webp","img/food-sun-juniors.webp","img/food-sun-los-tacos.webp","img/food-sun-timeout.webp","img/food-sun-van-leeuwen.webp","img/food-tue-f-ansel.webp","img/food-tue-f-balthazar.webp","img/food-tue-f-fanelli.webp","img/food-tue-f-icecream.webp","img/food-tue-f-joes.webp","img/food-tue-f-magnolia.webp","img/food-tue-f-mercatino.webp","img/food-tue-f-murrays.webp","img/food-tue-f-nomwah.webp","img/food-tue-f-princepizza.webp","img/food-tue-f-reggio.webp","img/food-tue-f-wholefoods.webp","img/fri-taxi.webp","img/hotel.webp","img/ktown.webp","img/lunch.webp","img/macys.webp","img/memorial.webp","img/mon-bet-soffitto.webp","img/mon-bryant.webp","img/mon-gct.webp","img/mon-m-moma.webp","img/mon-m-summit.webp","img/mon-saks.webp","img/mon-summit.webp","img/sat-alice.webp","img/sat-prometheus.webp","img/sat-times.webp","img/sat-whale.webp","img/seaport.webp","img/soho.webp","img/sun-arco.webp","img/sun-statua.webp","img/sun-velieri.webp","img/tue-bet-orologio.webp","img/tue-china.webp","img/tue-flatiron.webp","img/tue-wsq.webp","img/union-sq.webp","img/vinnie.svg","img/washington-sq.webp","index.html","js/app.js","js/core/game.js","js/core/geo.js","js/core/hours.js","js/core/schedule.js","js/core/storage.js","js/core/sun.js","js/core/time.js","js/ui/common.js","js/ui/ctx.js","js/ui/day.js","js/ui/dom.js","js/ui/food.js","js/ui/info.js","js/ui/maps.js","js/ui/now.js","js/ui/router.js","js/ui/steps.js","js/ui/stop.js","js/ui/vinnie.js","manifest.webmanifest","robots.txt"];
const CACHE = 'ny-' + VERSION;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const fresh = caches.open(CACHE).then((cache) => fetch(e.request).then((res) => {
    if (res.ok) cache.put(e.request, res.clone());
    return res;
  }));
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((cached) => cached || fresh));
  e.waitUntil(fresh.then(() => undefined, () => undefined));
});
