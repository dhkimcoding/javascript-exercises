const convertToCelsius = function(deg) {
  let res = (deg - 32) * 5 / 9;
  let rounded = Math.round(res * 10) / 10;
  return rounded
};

const convertToFahrenheit = function(deg) {
  let res = (deg * 9 / 5 + 32);
  let rounded = Math.round(res * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
