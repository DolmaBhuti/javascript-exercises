const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10; // multiplying by 10 and dividing gives it the correct 2 decimal places;
};

const convertToFahrenheit = function (celcius) {
  return Math.round(((celcius * 9) / 5 + 32) * 10) / 10; // 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
