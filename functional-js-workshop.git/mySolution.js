function upperCaser(input) {
	upperCaser.input.toUpperCase
} 

//or

var string = "make this all upper case"
string.toUpperCase();

Implement a function that takes a function as its first argument, a number num a
s its second argument, then executes the passed in function num times.

  function repeat(alertFunction, num) {
    // SOLUTION GOES HERE
    alert("function repeat, HI!") * num;

  }

  // Do not remove the line below
  module.exports = repeat



# Task

Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll

## Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Obj
ects/Array/map

## Boilerplate
numbers = [1, 2, 4, 5, 6, 7, 8, 9];

   doubleAll = numbers.map(function(x){
      return x * 2;
    });

    module.exports = doubleAll

