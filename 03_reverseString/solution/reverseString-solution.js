const reverseString = function (string) {
  return string.split("").reverse().join(""); //splits the string into array -> reverses the array -> joins array as string
};

module.exports = reverseString;
