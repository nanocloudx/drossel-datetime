module.exports = function(year, month, day) {
  if (!year || typeof year != 'number' || year < 1900 || 2100 < year) {
    year = '1970';
  }
  if (!month || typeof month != 'number' || month < 1 || 12 < month) {
    month = '01';
  }
  if (!day || typeof day != 'number' || day < 1 || 31 < day) {
    day = '01';
  }
  month = ('0' + month).slice(-2);
  day = ('0' + day).slice(-2);
  return year + '-' + month + '-' + day;
};
