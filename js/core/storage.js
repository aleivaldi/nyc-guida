export function safeStorage(backend) {
  const memory = new Map();
  return {
    getItem(k) {
      if (memory.has(k)) return memory.get(k);
      try { return backend ? backend.getItem(k) : null; } catch { return null; }
    },
    setItem(k, v) {
      memory.set(k, String(v));
      try { backend?.setItem(k, String(v)); } catch { /* blocked storage: keep in memory for this session */ }
    },
  };
}
