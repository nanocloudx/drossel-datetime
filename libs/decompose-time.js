module.exports = function(time) {
  if (typeof time != 'string') {
    return null;
  }
  var timezone = time.substr(8);
  time = time.slice(0, 8).split(':');

  switch(time.length) {
    case 2:
      return {
        hour: time[0].slice(0, 2),
        minute: time[1].slice(0, 2),
        second: '00',
        timezone: timezone
      };
    case 3:
      return {
        hour: time[0].slice(0, 2),
        minute: time[1].slice(0, 2),
        second: time[2].slice(0, 2),
        timezone: timezone
      };
    default:
      return null;
  }
};
