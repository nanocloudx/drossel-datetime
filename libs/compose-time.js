module.exports = function(hour, minute, second, timezone) {
  hour = Number(hour);
  minute = Number(minute);
  second = Number(second);
  if (!hour || hour < 0 || 23 < hour) {
    hour = '00';
  }
  if (!minute || minute < 0 || 59 < minute) {
    minute = '00';
  }
  if (!second || second < 0 || 59 < second) {
    second = '00';
  }
  hour = ('0' + hour).slice(-2);
  minute = ('0' + minute).slice(-2);
  second = ('0' + second).slice(-2);
  if (timezone == null || typeof timezone != 'number' || timezone < -12 || 12 < timezone) {
    timezone = null;
  } else if (timezone == 0) {
    timezone = 'Z';
  } else {
    var t = timezone.toString();
    if (t.slice(0,1) != '-') {
      t = '+' + t;
    }
    if (t.length == 2) {
      t = t.slice(0,1) + '0' + t.slice(-1);
    }
    timezone = t + ':00';
  }
  var result = hour + ':' + minute + ':' + second;
  if (timezone != null) {
    result = result + timezone;
  }
  return result;
};
