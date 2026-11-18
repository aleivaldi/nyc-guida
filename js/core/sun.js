const ZENITH = 90.833;
const NY_UTC_OFFSET_NOV = -5;
const DAYS_BEFORE_MONTH = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const sin = (d) => Math.sin((d * Math.PI) / 180);
const cos = (d) => Math.cos((d * Math.PI) / 180);
const deg = (r) => (r * 180) / Math.PI;
const norm = (v, m) => ((v % m) + m) % m;

// NOAA sunrise/sunset algorithm, setting branch.
export function sunsetMin({ month, day }, lat, lon) {
  const n = DAYS_BEFORE_MONTH[month - 1] + day;
  const lngHour = lon / 15;
  const t = n + (18 - lngHour) / 24;
  const M = 0.9856 * t - 3.289;
  const L = norm(M + 1.916 * sin(M) + 0.02 * sin(2 * M) + 282.634, 360);
  let RA = norm(deg(Math.atan(0.91764 * Math.tan((L * Math.PI) / 180))), 360);
  RA = (RA + Math.floor(L / 90) * 90 - Math.floor(RA / 90) * 90) / 15;
  const sinDec = 0.39782 * sin(L);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (cos(ZENITH) - sinDec * sin(lat)) / (cosDec * cos(lat));
  const H = deg(Math.acos(cosH)) / 15;
  const T = H + RA - 0.06571 * t - 6.622;
  const ut = norm(T - lngHour, 24);
  return Math.round(norm(ut + NY_UTC_OFFSET_NOV, 24) * 60);
}
