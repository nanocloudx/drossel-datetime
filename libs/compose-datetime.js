var composeDate = require('./compose-date');
var composeTime = require('./compose-time');

module.exports = function(year, month, day, hour, minute, second, timezone) {
  var date = composeDate(year, month, day);
  var time = composeTime(hour, minute, second, timezone);
  return date + 'T' + time;
};
