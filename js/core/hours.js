import { toMin } from './time.js';

export function isOpen(hours, weekday, minutes) {
  const ranges = hours?.[weekday];
  if (!ranges) return null;
  return ranges.some(([from, to]) => {
    const a = toMin(from);
    let b = toMin(to);
    if (b <= a) b += 1440;
    return (minutes >= a && minutes < b) || (minutes + 1440 >= a && minutes + 1440 < b);
  });
}

export function closesAt(hours, weekday, minutes) {
  const ranges = hours?.[weekday] ?? [];
  const r = ranges.find(([from, to]) => isOpen({ 0: [[from, to]] }, 0, minutes));
  return r ? r[1] : null;
}
