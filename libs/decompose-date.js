module.exports = function(date) {
  if (typeof date != 'string') {
    return null;
  }
  date = date.split('-');
  if (date.length != 3) {
    return null;
  }
  return {
    year: date[0].slice(0, 4),
    month: date[1].slice(0, 2),
    day: date[2].slice(0, 2)
  };
};
