// console.log("Hello World");
//
//
//
// var name = "Stephen Bradley";
//
// console.log("name:", name);
//
//
// var greeting = "hello";
// greeting = 5;
//
// console.log(greeting);
//
//
// console.log(typeof "hello");
// console.log(typeof 5);
// console.log(typeof 5.5);
//
// console.log(1-2);
// console.log(2+2);
//
// console.log(String(5));
//
//
// console.log("Hello my name is " + name);
// console.log(`hello my name is ${name}`);
//
//
// var myvariable;
//
// console.log(typeof myvariable);
//
// console.log(undefined + 2);
//
// console.log(true);
// console.log(false);
//
// if (1 > 0) {
// 	var message = "1 is greater than 0";
//   console.log(message);
// } else if (1 == 0) {
// 	var message = "1 is equal to 0";
//   console.log(message);
// } else {
// 	var message = "1 is not greater than 0";
//   console.log(message);
// }
//
//
// if (null) {
// 	var result = 'The expression evaluates to true.';
//   console.log(result);
// } else {
// 	var result = 'The expression evaluates to false.';
//   console.log(result);
// }
//
// console.log(Boolean("a"));  //True
// console.log(Boolean(''));   //False
// console.log(Boolean(0));    //False
// console.log(Boolean (4));   //True
// console.log(Boolean (undefined)); //False
// console.log(Boolean (NaN)); //False
//
//
// //console.log(3 + “hello”);  This does not work
// console.log("route" + 6 + 6 );
// // console.log(6 + 6 + “route”); This does not work
//
// console.log(!0)
// console.log(!1)



// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
//
// Define an anonymous function expression that takes two arguments:
//
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.


function additionOfNumbers(arrayOfNumbers){
  sum = 0
  for(num of arrayOfNumbers){
    sum += num
  }
  return sum
};

console.log(additionOfNumbers([1,2,3,4]));

var doesItHaveAKey = function(object, string){
  for (key in object){
    if (object.name === string){
      return true;}
      else{
        return false
      }
    }
  }

  console.log(doesItHaveAKey({name: 'Wojtek', age: 30}, "Wojtek"))
