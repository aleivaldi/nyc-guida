const TRIP_DAYS = { 5: 'fri', 6: 'sat', 0: 'sun', 1: 'mon', 2: 'tue' };
const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const NY = 'America/New_York';

export function nyNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: NY, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  const hour = Number(get('hour')) % 24;
  return {
    weekday: WEEKDAYS[get('weekday')],
    minutes: hour * 60 + Number(get('minute')),
    inNY: Intl.DateTimeFormat().resolvedOptions().timeZone === NY,
  };
}

export function tripDayId(weekday, inNY) {
  if (!inNY) return null;
  return TRIP_DAYS[weekday] ?? null;
}

export function toMin(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export function fmtMin(minutes) {
  const m = ((Math.round(minutes) % 1440) + 1440) % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
}
