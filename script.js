// Add two sum using regular function
/*
    system__1
*/

// function add(x,y) {
//     let result = x + y;
//     console.log(result)
// }
// add(10,20);



/*
    system__2
*/

// function add(x,y) {
//     return x + y;
// }
// console.log(add(10,20));



/*
    system__3
*/

// function add(x,y) {
//     return x + y;
// }
// let totalResult = add(10,20);
// console.log(totalResult);



/*
    system__4
*/

// function add(x,y) {
//     return x + y;
// }
// let totalResult = add(10,20) + add(20,30) + add(30,40);
// console.log(totalResult);



/*
    system__5
*/

// function add(x,y) {
//     let sum = x + y;
//     let multiply = x * y;
//     return sum + multiply;
// }
// let totalResult = add(10,20);
// console.log(totalResult);










// Even or Odd number checker
/*
    system__1  if else
*/

// function evenNumberChecker(num) {
//     if(num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd"
//     }
// }
// let evenResult = evenNumberChecker(0);
// console.log(evenResult);


/*
    system__2  ternary operator
*/

// function evenNumberChecker(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }
// let evenResult = evenNumberChecker(11);
// console.log(evenResult);


/*
    system__3  ternary operator
*/

// function evenNumberChecker(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }
// let evenResult = evenNumberChecker(11);
// console.log(evenResult);









// celsius to fahrenheit
/*
    system__1
*/

// function celsiusToFahrenheit(celsius) {
//     return result = (celsius * 9/5) + 32;
// }
// let fahrenheit = celsiusToFahrenheit(0);
// console.log(`${fahrenheit} Fahrenheit`);






// square of number
/*
    system__1
*/

// function square(num) {
//     return  num * num;
// }
// let result = square(5);
// console.log(result);




// First character of a string
/*
    system__1
*/

// function firstCharacter(str) {
//    return str.charAt(0);
// }
// let strFirstCharter = firstCharacter("Hello");
// console.log(strFirstCharter);





// Number negative & positive check
/*
    system__1 using if else condition
*/

// function positiveNeg(num) {
//     if(num>=0) {
//         return "Positive";
//     } else {
//         return "Negative";
//     }
// }
// let numberCheck = positiveNeg(0);
// console.log(numberCheck);


/*
    system__2 using tannery operator
*/

// function positiveNeg(num) {
//     return num>=0 ? "Positive" : "Negative";
// }
// let numberCheck = positiveNeg(0);
// console.log(numberCheck);

/*
    system__3 "using switch"
*/

// function numberCheck(num) {
//     switch(true) {
//         case num >= 0 :
//             return "Positive";
//         default :
//         return "Negative";
//     }
// }
// let result = numberCheck(1);
// console.log(result);






// Multiply two number using regular function
/*
    system__1
*/

// function add(x,y) {
//     if(typeof x !== "number") {
//         return "1at number is not valid!";
//     }else if(typeof y !== "number") {
//         return "2nd number is not valid!";~
//     } else {
//         return x * y;
//     }
// }
// let result = add(10,10);
// console.log(result);




// Minute to second 
/*
    system__1
*/

// function minuteSecond(min) {
//     return min * 60;
// }
// let result = minuteSecond(2);
// console.log(result);




// concatination
/*
    system__1
*/
// function concat(x,y) {
//     return x +" "+ y;
// }
// let result = concat("Hello","Javascript");
// console.log(result);


/*
    system__2
*/
// function concat(x,y) {
//     return x.concat(" "+y);
// }
// let result = concat("Hello","Javascript");
// console.log(result);




// Inclued method
/*
    system__1
*/

function checkStr(sentence,search) {
    return sentence.includes(search);
}
let result = checkStr("What the hell are you ding man!","the");
console.log(result);