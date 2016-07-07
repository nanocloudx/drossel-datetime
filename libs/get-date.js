var composeDate = require('./compose-date');
var decomposeDatetime = require('./decompose-datetime');

module.exports = function() {
  var d = decomposeDatetime(new Date().toJSON());
  return composeDate(d.year, d.month, d.day);
};
