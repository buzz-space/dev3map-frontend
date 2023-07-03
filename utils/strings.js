export function hasWhiteSpace(s) {
  return /\s/g.test(s);
}
export function handleMonth(month) {
  month = month.toString();
  return month?.length > 1 ? month : '0' + month
}