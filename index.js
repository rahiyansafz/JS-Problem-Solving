// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let str = "HELLO";

// let summ = "";

// for (let i = 0; i < str.length; i++) {
//   summ += str[i];
// }
// console.log(summ);

// let arr = summ.split(" ");

// console.log(arr);

let makeString = "qorum";

let convertArray = makeString.split("");

let text = "";

for (let i = 0; i < makeString.length; i++) {
  text += convertArray[i] + (convertArray.length - i);
}

let sum = 1;
for (let i = 0; i < text.length; i++) {
  if (i % 2 !== 0) {
    sum *= text[i];
    console.log(text[i]);
  }
}

console.log(text);
console.log(sum);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2/11/2020 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1

//JavaScript exercise to get the extension of a filename.

let name = "hello.ts";

console.log("problem no 1:");
console.log(name.split(".").pop());

// 2

// JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

let nmbr = 14;
let txt;
if (nmbr => 13) {
  console.log("problem no 2:");
  console.log(nmbr * 2);
}

// 3

// JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

function prbOne(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}
console.log("problem no 3:");
console.log(prbOne(30, 30));

// 4

// JavaScript program to compute the absolute difference between a specified
// number and 19. Returns triple their absolute difference if the specified number is greater than 19

function prbTwo(x) {
  if (x > 19) {
    return (x - 19) * 3;
  } else {
    return 19 - x;
  }
}
console.log("problem no 4:");
console.log(prbTwo(71));

// 5

// JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function prbThree(x, y) {
  if (x == 50 || y == 50 || x + y == 50) {
    return true;
  } else {
    return false;
  }
}

console.log("problem no 5:");
console.log(prbThree(0, 50));

// 6

// JavaScript program to check whether a given integer is within 20 of 100 or 400.

function myProblem(x) {
  if (x >= 20 && x <= 100) {
    return "x is within 20-100";
  } else if (x > 100 && x <= 400) {
    return "x is within 101-400";
  } else if (x >= 401) {
    return "x is bigger than 400";
  }
}
console.log("problem no 6:");
console.log(myProblem(401));

// 7

// JavaScript program to check from two given integers, whether one is positive and another one is negative.

function negpos(x, y) {
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
    return true;
  } else {
    return false;
  }
}
console.log("problem no 7:");
console.log(negpos(2, -6));

// 8

// JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

function huGe(x) {
  if (x.substring(0, 2) === "Py") {
    return x;
  } else {
    return "Py" + x;
  }
}
console.log("problem no 8:");
console.log(huGe("Python"));

// 9

// JavaScript program to remove a character at the specified position of a given string and return the new string

let aVar;
let anotherVar;

function myRemove(x, y) {
  aVar = x.substring(0, y);
  anotherVar = x.substring(y + 1, x.length);
  return aVar + anotherVar;
}

console.log("problem no 9:");
console.log(myRemove("Typescript", 6));

// 10

// JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

function posChanging(x) {
  if (x.length <= 1) {
    return x;
  }
  let aNewVar = x.substring(1, x.length - 1);
  return x.charAt(x.length - 1) + aNewVar + x.charAt(0);
}

console.log("problem no 10:");
console.log(posChanging("this"));

// 11

// JavaScript program to create a new string from a given string with the first character of the given string added at the front and back

function num11(x) {
  let y = x.substring(0, 1);
  return y + x + y;
}

console.log("problem no 11:");
console.log(num11("hello"));

// 12

// JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7

function posNum(x) {
  if (x % 3 === 0 || x % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("problem no 12:");
console.log(posNum(3));

// 13

// JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

function num13(x) {
  if (x.length >= 3) {
    let y = x.substring(x.length - 3);
    return y + x + y;
  } else {
    return false;
  }
}

console.log("problem no 13:");
console.log(num13("hello"));

// 14

// JavaScript program to check whether a string starts with 'Java' and false otherwise.

function checKing(x) {
  if (x.length < 4) {
    return false;
  }
  let y = x.substring(0, 4);
  if (y === "Type") {
    return true;
  } else {
    return false;
  }
}

console.log("problem no 14:");
console.log(checKing("Typescript"));

// 15

// JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range

function intG(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log("problem no 15:");
console.log(intG(5, 55));

// 16

// JavaScript program to check whether three given integer values are in the range 50..99(inclusive). Return true if one or more of them are in the said range

function againintG(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log("problem no 16:");
console.log(againintG(50, 6, 8));

// 17

// JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one

//
//
//
//
//
//
//
//

console.log("problem 17 is still unsolved!!!!!!!!!!!!!!!!!!");

// 18

// JavaScript program to find the largest of three given integers.
var ultimateNumb = 0;
function largeFunc(x, y, z) {
  if (x > y) {
    ultimateNumb = x;
  } else {
    ultimateNumb = y;
  }
  if (z > ultimateNumb) {
    ultimateNumb = z;
  }
  return ultimateNumb;
}
console.log("problem no 18:");
console.log(largeFunc(75, 25, 96));

// 19

// JavaScript program to find a value which is nearest to 100 from two different given integer values

//
//
//
//
//
//
//
//

console.log("problem 19 is still unsolved!!!!!!!!!!!!!!!!!!");

// 20

// JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function doublecheKing(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 40 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log("problem no 20:");
console.log(doublecheKing(70, 80));

// 21

// JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function numbint(x, y) {
  if (x > y) {
    return "x is larger";
  } else {
    return "y is larger";
  }
}
console.log("problem no 21:");
console.log(numbint(13, 20));

// 22

//  program to check whether a specified character exists within the 2nd to 4th position in a given string.

//
//
//
//
//
//
//
//
//

console.log("problem 22 is still unsolved!!!!!!!!!!!!!!!!!!");

// 23

// JavaScript program to check whether the last digit of the three given positive integers is same.

function sameint(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 1 == y % 1 && y % 1 == z % 1 && x % 1 == z % 1;
  } else {
    return false;
  }
}
console.log("problem no 23:");
console.log(sameint(2, 2, 2));

// 24

// JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

function upperFunc(x) {
  if (x.length < 3) {
    return x.toUpperCase();
  }
}

console.log("problem 24 is still unsolved!!!!!!!!!!!!!!!!!!");

// // 25

// // JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

// function examGrade(total, exam) {
//   if (exam > 90 && total > 90) {
//     return true;
//   } else if (total >= 89 && total <= 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 25:");
// console.log(examGrade(89));
// console.log(examGrade(90));
// console.log(examGrade(33, 90));

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // 25 (OR)
// function examinaton(x) {
//   if (x >= 89 && x <= 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("problem no 25 alternatively");
// console.log(examinaton(90));
// console.log(examinaton(88));

// 25

// Nested IF ELSE LOOP

function result(x) {
  if (x >= 80) {
    if (x >= 90) {
      return "A++";
    } else {
      return "A+";
    }
  } else {
    return "Not A+";
  }
}

console.log("Problem no 25:");
console.log(result(90));

// 26

// JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function summing(x, y) {
  if (x + y >= 50 && x + y <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log("problem no 26:");
console.log(summing(20, 20));

// 27

// JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8

function diffChecking(x, y) {
  if (x === 8 || y === 8) {
    return "yes the value is 8";
  } else if (x + y === 8 || x - y === 8) {
    return "yes the sum/diff is 8";
  } else {
    return false;
  }
}

console.log("problem no 27:");
console.log(diffChecking(3, 5));

// 28

// JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function threeNumberChecking(x, y, z) {
  if (x == y && y == z) {
    return 30;
  } else if (x === y || y === z || x === z) {
    return 20;
  } else {
    return 40;
  }
}
console.log("problem no 28 is:");
console.log(threeNumberChecking(5, 7, 5));

// 29

// JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function strictMode(x, y, z) {
  if (y > x && z > y) {
    return "Strict mode";
  } else if (z > y) {
    return "Soft mode";
  } else {
    return "kono mode ei na";
  }
}
console.log("problem no 29 is:");
console.log(strictMode(2, 4, 5));

// 30

// JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// 43

//didnt understood the ques

console.log("problem no 30 is still unsolved!!!!!!!!!!!!!!!!");

// 31

// JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// 44

// didnt understood the problem!!

console.log("problem no 31 is still unsolved!!!!!!!!!!!!!!!!");

// 32

// JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15

function checKINGthematch(x, y) {
  if (x === 15 || y === 15 || (x + y === 15 || x - y === 15)) {
    return true;
  } else {
    return false;
  }
}
console.log(checKINGthematch(20, 5));
