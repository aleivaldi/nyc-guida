const routes = [];

export function route(pattern, render) {
  routes.push({ re: new RegExp(`^${pattern.replace(/:\w+/g, '([^/]+)')}$`), render });
}

export function current() {
  return (location.hash.replace(/^#/, '') || '/');
}

export function render() {
  const path = current();
  for (const r of routes) {
    const m = path.match(r.re);
    if (m) {
      try {
        r.render(...m.slice(1).map(decodeURIComponent));
      } catch (err) {
        console.error('render failed', path, err);
        if (path !== '/') { location.hash = '#/'; return; }
        throw err;
      }
      markTab(path);
      return;
    }
  }
  location.hash = '#/';
}

function markTab(path) {
  const tab = path === '/' ? 'now' : path.startsWith('/vinnie') || path.startsWith('/mission') ? 'vinnie' : 'day';
  document.querySelectorAll('.tabs a').forEach((a) => {
    if (a.dataset.tab === tab) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

export function start() {
  window.addEventListener('hashchange', render);
  render();
}
