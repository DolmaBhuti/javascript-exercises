const removeFromArray = function (arr) {
  //1. assign arguments in a new array
  let arg = Array.from(arguments);
  arg.splice(0, 1);
  //2. loop through arguments in each iteration of the original array
  for (const a of arg) {
    //3. loop through original array
    for (let i = 0; i < arr.length; i++) {
      //4.  look for matching elements and remove it from the original

      if (a === arr[i]) {
        arr.splice(i, 1);
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
