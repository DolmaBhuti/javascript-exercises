const reverseString = function (word) {
  //create a variable to store the result in
  let result = "";
  let i = 1;
  //make a loop to go through the string
  while (i <= word.length) {
    result += word.charAt(word.length - i);
    i++;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
