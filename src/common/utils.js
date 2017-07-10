export function dateFormat(value) {
  var date = new Date(value);
  var Y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var H = date.getHours();
  var i = date.getMinutes();
  var s = date.getSeconds();
  if (m < 10) { m = '0' + m; }
  if (d < 10) { d = '0' + d; }
  if (H < 10) { H = '0' + H; }
  if (i < 10) { i = '0' + i; }
  if (s < 10) { s = '0' + s; }
  var vart = Y + '-' + m + '-' + d;
  return vart;
}
