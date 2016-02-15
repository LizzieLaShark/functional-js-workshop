//Task 1

function upperCaser(input) {
	upperCaser.input.toUpperCase
} 

//or

var string = "make this all upper case"
string.toUpperCase();

//Task 2

Implement a function that takes a function as its first argument, a number num a
s its second argument, then executes the passed in function num times.

  function repeat(function (num) {
    // SOLUTION GOES HERE
    alert("function repeat, HI!") * num;

  });

  // Do not remove the line below
  module.exports = repeat

//Task 3

numbers = [1, 2, 4, 5, 6, 7, 8, 9];

   doubleAll = numbers.map(function(x){
      return x * 2;
    });

    module.exports = doubleAll

//Task 4


# Task

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and return
s an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without
their containing object.

var getShortMessages = function(variable) {
        var message = [{
                message: "bla bla lad de da wedding is so distracting dev academy starting irl soon la la la"
            }, {
                message: "bla bla one two three four, practising my typing skills which are sheitttt"
            }, {
                message: "music is lovely music is amazing I hope we can have a live band at our wedding la lalala"
            }, {
                message: "pretty things in the summer time beaches and fishies and lovely lovely lovely dresses. winter time mountains and snow" 
                },
                {
	                message: "bla bla lad de da wedding is so distracting dev academy starting irl soon la la la"
                },
                {
                    message: "bla bla one two three four, practising my typing skills which are sheitttt"
                },
                {
                    message: "music is lovely music is amazing I hope we can have a live band at our wedding la lalala"
                },
                {
                    message: "pretty things in the summer time beaches and fishies and lovely lovely lovely dresses. winter time mountains and snow"
                },
                {
                    message: 'Esse id amet quis eu esse aute officia ipsum.'
                },
                {
                    message: "bla bla one two three four, practising my typing skills which are sheitttt"
                },
                {
                    message: "music is lovely music is amazing I hope we can have a live band at our wedding la lalala"
                },
                {
                    message: "pretty things in the summer time beaches and fishies and lovely lovely lovely dresses. winter time mountains and snow"
                },
                {
                    message: 'Esse id amet quis eu esse aute officia ipsum.'
                }]

              
            var mapped = message.map(function(message) {
                return messages.message;
            });
            var filtered = mapped.filter(function(x) {
                return mapped < 50;
            })


            var objToString = function (obj) { return obj.message; }
            var isShortEnough = function (messageString) { return messageString.length < 50;}

            var shortStringArray = messageArray.map(objToString)
            								   .filter(isShortEnough);





           var shortStringArray = messageArray.map(function (obj) { return obj.message; })
            								   .filter(function (messageString) { return messageString.length < 50;});



            
        };

var f = function (x) {return x*2}

var doubled = array.map(f)

var f2 = function (x) { return x < 10; }

var underten = doubled.filter(f2);

var underten = array.map(f).filter(f2)


getShortMessages=mapped();

newArray = oldArray.filter(function(val) {
  return val <= 5;


messages.message.length < 50



## Arguments

  * messages: an Array of 10 to 100 random objects that look something like this
:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Try chaining some Array methods!

## Example

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Obj
ects/Array/filter
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Obj
ects/Array/map

## Boilerplate

    function getShortMessages(messages) {
      // SOLUTION GOES HERE
    }

    module.exports = getShortMessages



//Task 5

var singleVal = array.reduce(function(prevVal, currentVal){
  return prevVal + currentVal;
}, 0);

 var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];


Given an Array of strings, use Array#reduce to create an object that contains th
e number of times each string occured in the array. Return the object directly (
no need to console.log).




var wordsReduce = countWords.reduce(function ()) {
	

}


   function countWords(inputWords) {
     
   }

if inputWords[] === 'apple'


var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];


var countingFunction = function(countSoFar, currentValue){

	 
	 if (currentValue === "Apple") {
	 	countSoFar.apple = countSoFar.apple + 1;
	 }
	 else if (currentValue === "Banana") {
	 	countSoFar.banana = countSoFar.banana + 1;
	 }
	 else if (currentValue === "Durian") {
	 	countSoFar.durian = countSoFar.durian + 1;
	 }

	 return countSoFar;
}


	
var finalCounts = inputWords.reduce(countingFunction, { apple: 0, banana: 0, durian: 0} );
console.log(finalCounts);




//figure out how to count how many of the same strings in an array
//use .reduce function to output above into an object