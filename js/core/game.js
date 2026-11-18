const KEY = 'vinnie';

export function gameState(storage) {
  let st = {};
  try { st = JSON.parse(storage.getItem(KEY)) ?? {}; } catch { st = {}; }
  return { names: st.names ?? null, results: st.results ?? {} };
}

function save(storage, st) {
  storage.setItem(KEY, JSON.stringify(st));
}

export function recordResult(storage, missionId, winner) {
  const st = gameState(storage);
  if (winner) st.results[missionId] = winner;
  else delete st.results[missionId];
  save(storage, st);
}

export function setNames(storage, names) {
  const st = gameState(storage);
  st.names = names;
  save(storage, st);
}

export function score(results) {
  const v = Object.values(results);
  return { team: v.filter((w) => w === 'team').length, vinnie: v.filter((w) => w === 'vinnie').length };
}

export function kidsChoose(results) {
  const s = score(results);
  return s.team > s.vinnie;
}

export function rolesFor(missionIndex, names) {
  const pair = names && names[0] && names[1] ? names : ['uno di voi', "l'altro"];
  return missionIndex % 2 === 0 ? [pair[0], pair[1]] : [pair[1], pair[0]];
}

export function isFinished(missions, results) {
  const last = missions[missions.length - 1];
  return Boolean(last && results[last.id]);
}
