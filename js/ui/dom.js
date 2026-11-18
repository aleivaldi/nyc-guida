export function h(tag, attrs, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs ?? {})) {
    if (v == null || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'style' && typeof v === 'object') {
      for (const [prop, val] of Object.entries(v)) {
        if (prop.startsWith('--')) el.style.setProperty(prop, val);
        else el.style[prop] = val;
      }
    }
    else el.setAttribute(k, v === true ? '' : v);
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}

export function mount(...nodes) {
  const app = document.getElementById('app');
  app.replaceChildren(...nodes.flat().filter(Boolean));
  app.scrollTop = 0;
  window.scrollTo(0, 0);
}

export function svg(markup) {
  const t = document.createElement('template');
  t.innerHTML = markup.trim();
  return t.content.firstChild;
}

export function arrow(deg) {
  return svg(`<svg class="arrow" viewBox="0 0 24 24" style="transform:rotate(${Math.round(deg)}deg)" aria-hidden="true"><path d="M12 3l6 12h-5v6h-2v-6H6z" fill="currentColor"/></svg>`);
}
