// "use strict";

// //
// // let getDriverLisence = false;
// // const passTest = true;

// // if (passTest) gerDriverLisense = true;
// // if (getDriverLisence) console.log("You Get the Drivers Lisence!!!!");

// // --FUNCTIONS
// function logger() {
//   console.log("Hi this is Mahsa");
// }
// logger();
// function Juise(apple, banana) {
//   console.log(apple, banana);
//   const juiseMaker = `You Have ${apple} apple and ${banana} banana in your Juise !!`;
//   return juiseMaker;
// }
// const juiseFunc = Juise(3, 5);
// console.log(juiseFunc);

// // --FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calcAge1(2006);
// console.log(`You Have ${age1} Years Old!`);

// // --FUNCTIONS EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calcAge2(2006);
// console.log(`You Have ${age2} Years Old!`);

// // -- FUNCTION ARROW(one line codes)
// const calcaAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcaAge3(2006);
// console.log(`You Have ${age3} Years Old!`);
// // --FUNCTION ARROW(multi line codes)
// const yearsTillRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} is Retires in ${retirement} Years Later!`;
// };
// const retire = yearsTillRetirement(2006, "Mahsa");
// console.log(retire);

// ------------------------

// // -- FUNCTION CHALLENGE

function AVG(firstValeu, secondValeu, thirdValeu) {
  const calcAVG = (firstValeu + secondValeu + thirdValeu) / 3;
  return calcAVG;
}

const koalasAVG = AVG(23, 34, 27);
console.log(`Koalas Average is ${koalasAVG}`);
const dolphinsAVG = AVG(85, 54, 41);
console.log(`Dolphins Average is ${dolphinsAVG}`);

function checkWinner(averageKolas, averageDolphins) {
  if (averageKolas > 2 * averageDolphins) {
    return `Koalas Are Winners!🥳`;
  } else if (averageDolphins > 2 * averageKolas) {
    return `Dolphins Are Winners!🥳`;
  } else {
    return `No one Wins!☹️`;
  }
}

console.log(checkWinner(koalasAVG, dolphinsAVG));
