module.exports = function(year, month, day) {
  year = Number(year);
  month = Number(month);
  day = Number(day);
  if (!year || year < 1900 || 2100 < year) {
    year = '1970';
  }
  if (!month || month < 1 || 12 < month) {
    month = '01';
  }
  if (!day || day < 1 || 31 < day) {
    day = '01';
  }
  month = ('0' + month).slice(-2);
  day = ('0' + day).slice(-2);
  return year + '-' + month + '-' + day;
};
