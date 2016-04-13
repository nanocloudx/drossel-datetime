var decomposeDate = require('./decompose-date');
var decomposeTime = require('./decompose-time');

module.exports = function(datetime) {
  if (typeof datetime != 'string') {
    return null;
  }
  datetime = datetime.split('T');
  if (datetime.length != 2) {
    return null;
  }
  var date = decomposeDate(datetime[0]);
  var time = decomposeTime(datetime[1]);
  if (!date || !time) {
    return null;
  }
  return {
    year: date.year,
    month: date.month,
    day: date.day,
    hour: time.hour,
    minute: time.minute,
    second: time.second,
    timezone: time.timezone
  };
};
