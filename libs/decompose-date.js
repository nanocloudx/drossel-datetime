module.exports = function(date) {
  if (typeof date != 'string') {
    return null;
  }
  date = date.split('-');
  if (date.length != 3) {
    return null;
  }
  return {
    year: date[0],
    month: date[1],
    day: date[2]
  };
};
