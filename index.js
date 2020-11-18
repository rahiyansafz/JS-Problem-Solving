// // Import stylesheets
// import "./style.css";

// // Write Javascript code!
// const appDiv = document.getElementById("app");
// appDiv.innerHTML = `<h1>JS</h1>`;

// // let str = "HELLO";

// // let summ = "";

// // for (let i = 0; i < str.length; i++) {
// //   summ += str[i];
// // }
// // console.log(summ);

// // let arr = summ.split(" ");

// // console.log(arr);

// let makeString = "qorum";

// let convertArray = makeString.split("");

// let text = "";

// for (let i = 0; i < makeString.length; i++) {
//   text += convertArray[i] + (convertArray.length - i);
// }

// let sum = 1;
// for (let i = 0; i < text.length; i++) {
//   if (i % 2 !== 0) {
//     sum *= text[i];
//     console.log(text[i]);
//   }
// }

// console.log(text);
// console.log(sum);
// console.log("");
// console.log("");
// console.log("");

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2/11/2020 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 1

// //JavaScript exercise to get the extension of a filename.

// let name = "hello.ts";

// console.log("problem no 1:");
// console.log(name.split(".").pop());
// console.log("");
// console.log("");
// console.log("");

// // 2

// // JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

// let nmbr = 14;
// let txt;
// if (nmbr => 13) {
//   console.log("problem no 2:");
//   console.log(nmbr * 2);
// }
// console.log("");
// console.log("");
// console.log("");
// // 3

// // JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

// function prbOne(x, y) {
//   if (x === y) {
//     return (x + y) * 3;
//   } else {
//     return x + y;
//   }
// }
// console.log("problem no 3:");
// console.log(prbOne(30, 30));
// console.log("");
// console.log("");
// console.log("");
// // 4

// // JavaScript program to compute the absolute difference between a specified
// // number and 19. Returns triple their absolute difference if the specified number is greater than 19

// function prbTwo(x) {
//   if (x > 19) {
//     return (x - 19) * 3;
//   } else {
//     return 19 - x;
//   }
// }
// console.log("problem no 4:");
// console.log(prbTwo(71));
// console.log("");
// console.log("");
// console.log("");
// // 5

// // JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

// function prbThree(x, y) {
//   if (x == 50 || y == 50 || x + y == 50) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 5:");
// console.log(prbThree(0, 50));
// console.log("");
// console.log("");
// console.log("");
// // 6

// // JavaScript program to check whether a given integer is within 20 of 100 or 400.

// function myProblem(x) {
//   if (x >= 20 && x <= 100) {
//     return "x is within 20-100";
//   } else if (x > 100 && x <= 400) {
//     return "x is within 101-400";
//   } else if (x >= 401) {
//     return "x is bigger than 400";
//   }
// }
// console.log("problem no 6:");
// console.log(myProblem(401));
// console.log("");
// console.log("");
// console.log("");
// // 7

// // JavaScript program to check from two given integers, whether one is positive and another one is negative.

// function negpos(x, y) {
//   if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("problem no 7:");
// console.log(negpos(2, -6));
// console.log("");
// console.log("");
// console.log("");
// // 8

// // JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

// function huGe(x) {
//   if (x.substring(0, 2) === "Py") {
//     return x;
//   } else {
//     return "Py" + x;
//   }
// }
// console.log("problem no 8:");
// console.log(huGe("Python"));
// console.log("");
// console.log("");
// console.log("");
// // 9

// // JavaScript program to remove a character at the specified position of a given string and return the new string

// let aVar;
// let anotherVar;

// function myRemove(x, y) {
//   aVar = x.substring(0, y);
//   anotherVar = x.substring(y + 1, x.length);
//   return aVar + anotherVar;
// }

// console.log("problem no 9:");
// console.log(myRemove("Typescript", 6));
// console.log("");
// console.log("");
// console.log("");
// // 10

// // JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

// function posChanging(x) {
//   if (x.length <= 1) {
//     return x;
//   }
//   let aNewVar = x.substring(1, x.length - 1);
//   return x.charAt(x.length - 1) + aNewVar + x.charAt(0);
// }

// console.log("problem no 10:");
// console.log(posChanging("this"));
// console.log("");
// console.log("");
// console.log("");
// // 11

// // JavaScript program to create a new string from a given string with the first character of the given string added at the front and back

// function num11(x) {
//   let y = x.substring(0, 1);
//   return y + x + y;
// }

// console.log("problem no 11:");
// console.log(num11("hello"));
// console.log("");
// console.log("");
// console.log("");
// // 12

// // JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7

// function posNum(x) {
//   if (x % 3 === 0 || x % 7 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 12:");
// console.log(posNum(3));
// console.log("");
// console.log("");
// console.log("");
// // 13

// // JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

// function num13(x) {
//   if (x.length >= 3) {
//     let y = x.substring(x.length - 3);
//     return y + x + y;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 13:");
// console.log(num13("hello"));
// console.log("");
// console.log("");
// console.log("");
// // 14

// // JavaScript program to check whether a string starts with 'Java' and false otherwise.

// function checKing(x) {
//   if (x.length < 4) {
//     return false;
//   }
//   let y = x.substring(0, 4);
//   if (y === "Type") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 14:");
// console.log(checKing("Typescript"));
// console.log("");
// console.log("");
// console.log("");
// // 15

// // JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range

// function intG(x, y) {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 15:");
// console.log(intG(5, 55));
// console.log("");
// console.log("");
// console.log("");
// // 16

// // JavaScript program to check whether three given integer values are in the range 50..99(inclusive). Return true if one or more of them are in the said range

// function againintG(x, y, z) {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("problem no 16:");
// console.log(againintG(50, 6, 8));
// console.log("");
// console.log("");
// console.log("");
// // 17

// // JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one

// //
// //
// //
// //
// //
// //
// //
// //
// //

// console.log("problem 17 is still unsolved!!!!!!!!!!!!!!!!!!");
// console.log("");
// console.log("");
// console.log("");
// // 18

// // JavaScript program to find the largest of three given integers.
// var ultimateNumb = 0;
// function largeFunc(x, y, z) {
//   if (x > y) {
//     ultimateNumb = x;
//   } else {
//     ultimateNumb = y;
//   }
//   if (z > ultimateNumb) {
//     ultimateNumb = z;
//   }
//   return ultimateNumb;
// }
// console.log("problem no 18:");
// console.log(largeFunc(75, 25, 96));
// console.log("");
// console.log("");
// console.log("");
// // 19

// // JavaScript program to find a value which is nearest to 100 from two different given integer values
// // function comparing(x, y) {
// //   if (x != y) {
// //     let x1 = Math.abs(x - 100);
// //     let y1 = Math.abs(y - 100);

// //     if (x1 < y1) {
// //       console.log("x is nearest");
// //     } else if (y1 < x1) {
// //       console.log("y is nearest");
// //     }
// //   } else {
// //     return "kichui na";
// //   }
// // }
// // console.log("problem no 19");
// // console.log(comparing(90, 80));
// // console.log("");
// // console.log("");
// // console.log("");

// // 20

// // JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function doublecheKing(x, y) {
//   if (
//     (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
//     (x >= 70 && x <= 100 && y >= 40 && y <= 100)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 20:");
// console.log(doublecheKing(70, 80));
// console.log("");
// console.log("");
// console.log("");
// // 21

// // JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// function numbint(x, y) {
//   if (x > y) {
//     return "x is larger";
//   } else {
//     return "y is larger";
//   }
// }
// console.log("problem no 21:");
// console.log(numbint(13, 20));
// console.log("");
// console.log("");
// console.log("");
// // 22

// //  program to check whether a specified character exists within the 2nd to 4th position in a given string.

// //
// //
// //
// //
// //
// //
// //
// //
// //

// console.log("problem 22 is still unsolved!!!!!!!!!!!!!!!!!!");
// console.log("");
// console.log("");
// console.log("");
// // 23

// // JavaScript program to check whether the last digit of the three given positive integers is same.

// function sameint(x, y, z) {
//   if (x > 0 && y > 0 && z > 0) {
//     return x % 1 == y % 1 && y % 1 == z % 1 && x % 1 == z % 1;
//   } else {
//     return false;
//   }
// }
// console.log("problem no 23:");
// console.log(sameint(2, 2, 2));
// console.log("");
// console.log("");
// console.log("");
// // 24

// // JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

// console.log("problem 24 is still unsolved!!!!!!!!!!!!!!!!!!");
// console.log("");
// console.log("");
// console.log("");
// // // 25

// // // JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

// // function examGrade(total, exam) {
// //   if (exam > 90 && total > 90) {
// //     return true;
// //   } else if (total >= 89 && total <= 100) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log("problem no 25:");
// // console.log(examGrade(89));
// // console.log(examGrade(90));
// // console.log(examGrade(33, 90));

// // ////////////////////////////////////////////////////////////////////////////////////////////////

// // // 25 (OR)
// // function examinaton(x) {
// //   if (x >= 89 && x <= 100) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
// // console.log("problem no 25 alternatively");
// // console.log(examinaton(90));
// // console.log(examinaton(88));

// // 25

// // Nested IF ELSE LOOP

// function result(x) {
//   if (x >= 80) {
//     if (x >= 90) {
//       return "A++";
//     } else {
//       return "A+";
//     }
//   } else {
//     return "Not A+";
//   }
// }

// console.log("Problem no 25:");
// console.log(result(90));
// console.log("");
// console.log("");
// console.log("");
// // 26

// // JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// function summing(x, y) {
//   if (x + y >= 50 && x + y <= 80) {
//     return 65;
//   } else {
//     return 80;
//   }
// }
// console.log("problem no 26:");
// console.log(summing(20, 20));
// console.log("");
// console.log("");
// console.log("");
// // 27

// // JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8

// function diffChecking(x, y) {
//   if (x === 8 || y === 8) {
//     return "yes the value is 8";
//   } else if (x + y === 8 || x - y === 8) {
//     return "yes the sum/diff is 8";
//   } else {
//     return false;
//   }
// }

// console.log("problem no 27:");
// console.log(diffChecking(3, 5));
// console.log("");
// console.log("");
// console.log("");
// // 28

// // JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// function threeNumberChecking(x, y, z) {
//   if (x == y && y == z) {
//     return 30;
//   } else if (x === y || y === z || x === z) {
//     return 20;
//   } else {
//     return 40;
//   }
// }
// console.log("problem no 28 is:");
// console.log(threeNumberChecking(5, 7, 5));
// console.log("");
// console.log("");
// console.log("");
// // 29

// // JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// // Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// function strictMode(x, y, z) {
//   if (y > x && z > y) {
//     return "Strict mode";
//   } else if (z > y) {
//     return "Soft mode";
//   } else {
//     return "kono mode ei na";
//   }
// }
// console.log("problem no 29 is:");
// console.log(strictMode(2, 4, 5));
// console.log("");
// console.log("");
// console.log("");
// // 30

// // JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// // 31

// // JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// // 32

// // JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15

// function checKINGthematch(x, y) {
//   if (x === 15 || y === 15 || (x + y === 15 || x - y === 15)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("problem no 32:");
// console.log(checKINGthematch(20, 5));
// console.log("");
// console.log("");
// console.log("");
// // 33

// // JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

// function Valuesinofat(x, y) {
//   if (x % 7 === 0 || x % 11 === 0 || (y % 7 === 0 || y % 11 === 0)) {
//     return "jay";
//   } else {
//     return "jayna";
//   }
// }
// console.log("problem no 33:");
// console.log(Valuesinofat(7, 12));
// console.log("");
// console.log("");
// console.log("");
// // 34

// // JavaScript program to check whether a given number is presents in the range 40..10000.
// // For example 40 presents in 40 and 10000

// function rangeChecKing(x, y, n) {
//   if (n < 40 && n > 10000) {
//     return false;
//   } else if (n > x && n < y) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("problem no 34:");
// console.log(rangeChecKing(40, 6000, 40));
// console.log("");
// console.log("");
// console.log("");
// // 35

// // JavaScript program to reverse a given string

// console.log("problem no 35:");

// let aString = "hello!";

// let makeArraying = aString.split("");
// console.log(makeArraying);

// makeArraying.reverse();
// console.log(makeArraying);

// let backtothe = makeArraying.toString();
// console.log(backtothe);

// let newDescription = backtothe.replace(/,/g, "");
// console.log(newDescription);

// // Alternative of 35

// function ultaString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// console.log("problem no 35 but dynamically:");
// console.log(ultaString("hello"));
// console.log("");
// console.log("");
// console.log("");
// // 36

// // JavaScript program to replace every character in a given string with the character following it in the alphabet.

// // 37

// // JavaScript program to capitalize the first letter of each word of a given string.

// //38

// // JavaScript program to convert a given number to hours and minutes.

// // 39
// // JavaScript program to convert the letters of a given string in alphabetical order.

// function serially(str) {
//   return str
//     .split("")
//     .sort()
//     .join("");
// }
// console.log("problem no 39:");
// console.log(serially("Angular"));
// console.log("");
// console.log("");
// console.log("");
// // 40

// // JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// // 41

// // JavaScript program to count the number of vowels in a given string.

// function vowelsearch(str) {
//   return str.replace(/[^aeiou]/g, "").length;
// }
// console.log("problem no 41:");
// console.log(vowelsearch("Angular"));
// console.log("");
// console.log("");
// console.log("");
// ///////////////////////////////////////////////////////////////////////////////

// // let ground = "hello123";
// // console.log(ground);
// // let makeArr = ground.split("");
// // console.log(makeArr);

// // makeArr.splice(2, 1);
// // console.log(makeArr);

// // let agaiString = makeArr.toString();
// // console.log(agaiString);

// // let lastAssign = agaiString.replace(/,/g, "");

// // console.log(lastAssign);

// let ground = "hello123";
// console.log(ground);
// let abcde = ground.indexOf("2");
// console.log("pos of One:", abcde);

// let makeArr = ground.split("");
// console.log(makeArr);

// let polo = makeArr.splice(abcde, 1);
// console.log(makeArr);
// console.log("");
// console.log("");
// console.log("");

// function removeChar(x) {
//   let notokay;
//   notokay = x.replace(/\d/g, "");
//   console.log("else:", notokay);
//   console.log(x);
//   return notokay;
// }
// console.log(removeChar("hel123lo"));
// console.log("");

// console.log("");
// console.log("");

// // 42

// // JavaScript program to check whether a given string contains equal number of p's and t's.

// function funtiii(str) {
//   let no_one = str.replace(/[^a]/g, "");

//   let no_two = str.replace(/[^m]/g, "");

//   let anew = no_one.length;
//   let anew2 = no_two.length;

//   return anew === anew2;
// }
// console.log("problem no 42");
// console.log(funtiii("madam"));
// console.log("");
// console.log("");
// console.log("");

// // 43
// // JavaScript program to divide two positive numbers and return a string with properly formatted commas.

// // 44
// // JavaScript program to create a new string of specified copies (positive number) of a given string.

// function copy(x, y) {
//   if (x < 0) return false;
//   else return x.repeat(y);
// }
// console.log("problem no 44");
// console.log(copy("xyz", 2));
// console.log("");
// console.log("");
// console.log("");

// // 45
// // JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

// function newstring(x) {
//   if (x.length >= 3) {
//     let a = x.substring(x.length - 3);
//     return a + a + a + a;
//   } else return false;
// }
// console.log("problem no 45");
// console.log(newstring("Python"));
// console.log("");
// console.log("");
// console.log("");

// // 46
// // JavaScript program to extract the first half of a string of even length.

// function half(z) {
//   if (z.length % 2 == 0) {
//     return z.slice(0, z.length / 2);
//   }
//   return z;
// }
// console.log("problem no 46");
// console.log(half("Python"));
// console.log(half("Typescript"));
// console.log("");
// console.log("");
// console.log("");

// // 47
// // JavaScript program to create a new string without the first and last character of a given string

// function kata(x) {
//   return x.substring(1, x.length - 1);
// }
// console.log("problem no 45");
// console.log(kata("Typescript"));
// console.log("");
// console.log("");
// console.log("");

// // 48
// // JavaScript program to concatenate two strings except their first character.

// function kata1(x) {
//   return x.substring(1);
// }
// console.log("problem no 45(1) FOR ONE STRING");
// console.log(kata1("Typescript"));
// console.log("");
// console.log("");
// // 2 //
// function concatenate(str1, str2) {
//   str1 = str1.substring(1, str1.length);
//   str2 = str2.substring(1, str2.length);
//   return str1 + str2;
// }
// console.log("problem no 45(2) FOR TWO STRING");
// console.log(concatenate("Typescript ", "Python"));
// console.log("");
// console.log("");
// console.log("");

// // 49
// // JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

// function lasting(x) {
//   if (x.length > 1) {
//     return x.slice(-3) + x.slice(0, -3);
//   }
//   return x;
// }
// console.log("problem no 49");
// console.log(lasting("Typescript"));
// console.log(lasting("Python"));
// console.log("");
// console.log("");
// console.log("");

// // 50
// // JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

// function center(x) {
//   if (x.length % 2 != 0) {
//     let mid = (x.length + 1) / 2;
//     return x.slice(mid - 2, mid + 1);
//   }
//   return x;
// }
// console.log("problem no 50");
// console.log(center("Angular"));
// console.log("");
// console.log("");
// console.log("");

// // 51
// // JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// // function concatig(x, y) {
// //   const m = Math.min(x.length, y.length);

// //   return x.substring(x.length - m) + y.substring(y.length - m);
// // }

// // console.log(concatig("Python", "JS"));
//////////////////////////////////////////////////////////////////////////
// 52
// JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

function finDingString(str) {
  if (str.substring(str.length - 6, str.length) == "Script") {
    return true;
  } else {
    return false;
  }
}
console.log(finDingString("JavaScript"));
console.log(finDingString("TypeScript"));
console.log(finDingString("Java Scripts"));
console.log("");
//////////////////////////////////////////////////////////////////////
// 53
// JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function city_name(str) {
  if (
    str.length >= 3 &&
    (str.substring(0, 3) == "Los" || str.substring(0, 3) == "New")
  ) {
    return str;
  }

  return "";
}

console.log(city_name("New York"));
console.log(city_name("London"));
console.log("");
////////////////////////////////////////////////////////
// 54
// JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

function removingP(the_string) {
  const first_letter = the_string.length > 0;
  const last_letter = the_string.length - 1;
  if (
    the_string.length > 0 &&
    the_string.charAt(0) == "P" &&
    (the_string.length > 0 && the_string.charAt(the_string.length - 1) == "P")
  ) {
    const brandNewString = the_string.substring(first_letter, last_letter);
    console.log(brandNewString);
  } else if (
    the_string.length > 0 &&
    the_string.charAt(0) == "P" &&
    (the_string.length > 0 && the_string.charAt(the_string.length - 1) !== "P")
  ) {
    const brandNewString = the_string.substring(first_letter);
    console.log(brandNewString);
  } else {
    console.log(the_string);
  }
}
removingP("PythonP");
console.log("");
/////////////////////////////////
// 55
// JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.

function two_string(str, n) {
  first_part = str.substring(0, n);
  last_part = str.substring(str.length - n);
  return first_part + last_part;
}

console.log(two_string("Angular", 2));
console.log(two_string("Angular", 3));
console.log("");
//////////////////////////////////////////////////////////////

// 56
// JavaScript program to compute the sum of three elements of a given array of integers of length 3

// function summingThree(nums) {
//   return nums[0] + nums[1] + nums[2];
// }
// console.log(summingThree([5, 5, 5]));

//
function summingThree(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // if (nums.length == 3) {
    result += nums[i];
    // } else {
    // return "index out of bound";
    // }
  }
  return result;
}

console.log(summingThree([10, 10, 10, 10]));
console.log("");

// 57
// JavaScript program to rotate the elements left of a given array of integers of length 3.
function reverse(arr) {
  arr.unshift(arr.pop());
  return arr;
}
console.log(reverse([10, 11, 12]));
/////////////////////////////////////
function rotateArray(intArray) {
  var firstElement = intArray[0];
  intArray.splice(0, 1);
  intArray.push(firstElement);

  return intArray;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6]));
/////////////////////////////////////////////////
let rotateLeft = array => {
  let first = array[0];
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      array[array.length - 1] = first;
    } else {
      array[i] = array[i + 1];
    }
  }
  return array;
};
console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("");

// 58
// JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1

function findingOne(nums) {
  return nums[0] == 1 || nums.length - 1 == 1;
}

console.log(findingOne([1, 3, 5]));
console.log(findingOne([1, 3, 5, 1]));
console.log(findingOne([2, 4, 6]));
console.log("");
/////////////////////////////////////

// 59
// JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

function matchingFL(Given) {
  if (Given.length >= 1) {
    return Given[0] === Given[Given.length - 1];
  } else {
    return false;
  }
}
console.log(matchingFL([10, 20, 30]));
console.log(matchingFL([10, 20, 30, 10]));
console.log(matchingFL([20, 20, 20]));
console.log("");
///////////////////////////////////////////////////////////

// 60
// JavaScript program to reverse the elements of a given array of integers length 3.

function reverse3(array) {
  return array.reverse();
}

console.log(reverse3([5, 4, 3]));
console.log(reverse3([1, 0, -1]));
console.log(reverse3([2, 3, 1]));
/////////////////////////////////////////////////////////
function reverse(arr) {
  // let itrs = Math.floor(arr.length / 2);
  let itrs = arr.length / 2;
  for (let i = 0; i < itrs; i++) {
    let save = arr[i];
    arr[i] = arr[arr.length - (1 + i)];
    arr[arr.length - (1 + i)] = save;
  }
  return arr;
}
console.log(reverse([1, 2, 3]));
console.log("");

// 61
// JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
function array(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let display = [];
  for (let i = 0; i < arr.length; i++) {
    display.push(max);
  }
  return display;
}
console.log(array([20, 30, 40, 55, 33]));
console.log("");
///////////////////////////////////

// 62
// JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

function middle_elements(a, b) {
  var new_array = [];
  new_array.push(a[1], b[1]);

  return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));
console.log("");
///////////////////////////////////////////////////////////////////////////
/////////////////////
///////
//

function middle_element(element) {
  let para = element.join("");
  let newArr = "";
  const abc = (para.length - 1) / 2;
  console.log(abc);
}
console.log(middle_element([1, 2, 3, 4, 5, 6, 7, 8, 9]));
/////////////////////////
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5, 6];
let middle = arr => {
  let res = Math.floor(arr.length / 2);
  if (arr.length % 2 == 1) {
    return arr[res];
  } else if (arr.length % 2 == 0) {
    return arr.slice(res - 1, res + 1);
  }
};
console.log(middle(array1));
console.log(middle(array2));
////////////////////////////////////
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const findMiddleValue = arr => {
  let length = arr.length / 2;
  if (arr.length % 2 === 1) console.log(arr[Math.floor(length)]);
  else console.log(arr[length - 1]);
  console.log(arr[length]);
};
findMiddleValue(arr);
/////////////////////////////////////////
// here is my general solution...
const arre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let center =
  arre.length % 2
    ? arre[(arre.length - 1) / 2]
    : [arre[arre.length / 2 - 1], arre[arre.length / 2]];
console.log(center);
