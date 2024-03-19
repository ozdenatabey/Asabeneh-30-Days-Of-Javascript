// let a = 2;
// let b = 3;
// let result = a ** b;
// console.log(result);
// console.log(b % a);

// let c = "10";
// let d = 10;
// console.log(d === c);

// alert("Welcome to Day 3");

// let number = prompt("Enter number");
// number > 0
//   ? console.log(`The number (${number}) is greater than 0`)
//   : console.log(`The number (${number}) is lower than 0`);

// const sure = confirm("Are you sure to contiune learning?");
// sure === true
//   ? console.log("Keep reading tutorials")
//   : console.log("Close this window & fuck off!");

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth();
// const date = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const today = now.getDay();

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

// // Exercise Level 1

// let firstName = "Özden";
// let lastName = "Atabey";
// let country = "Turkey";
// let city = "İstanbul";
// let age = 31;
// let isMarried = true;let yearOfLive = prompt("Enter number of years you live");
// alert(`You lived ${yearOfLive * 365 * 24 * 60} seconds.`);

// console.log(
//   typeof firstName,
//   typeof lastName,
//   typeof country,
//   typeof city,
//   typeof age,
//   typeof isMarried,
//   typeof yil
// );

// console.log(typeof "10" === 10);
// console.log(typeof parseInt(9.81) === 10);

// console.log("python".length !== "jargon".length);

// console.log(`The year is ${year}`);
// console.log(`The month is ${month + 1}`);
// console.log(`The date is ${date}`);
// console.log(`The day of the week is ${today}`);
// console.log(now.getTime() / 100);

// // Exercise Level 2

// let height = prompt("Enter high");
// let base = prompt("Enter base");
// let area = 0.5 * base * height;
// alert(`The area of the triangle is: ${area}`);

// let y;
// let x = prompt("Enter x value");
// y = x * x + 6 * x + 9;
// console.log(y);

// let person = prompt("Enter your name");
// person.length > 7 ? alert("Your name is long") : alert("Your name is short");
// let hour = prompt("Enter total hours of work");
// let rate = prompt("Enter rate per hours");
// console.log(`Hello ${person}, your total earning is ${hour * rate}`);
// alert(`Hello ${person}, your total earning is ${hour * rate}`);

// let firstName1 = prompt("What is your name?");
// let lastName1 = prompt("What is your surname");
// firstName1.length > lastName1.length
//   ? alert(
//       `Your name: ${firstName1} is longer than your family name: ${lastName1}`
//     )
//   : alert(
//       `Your name: ${firstName1} is shorter than your family name: ${lastName1}`
//     );

// let myAge = parseInt(prompt("My age is:"));
// let yourAge = parseInt(prompt("Your age is:"));
// myAge > yourAge
//   ? alert(`I am ${myAge - yourAge} years older than you.`)
//   : alert(`I am ${yourAge - myAge} years younger than you.`);

// const now = new Date();
// const year = now.getFullYear();
// let birthYear = parseInt(prompt("Enter your birth year"));
// let age1 = year - birthYear;
// age1 > 18
//   ? alert(`You are ${age1}. You are old enough to drive`)
//   : alert(
//       `You are ${age1}. You will be allowed to drive after ${18 - age1} years.`
//     );

// let yearOfLive = prompt("Enter number of years you live");
// alert(`You lived ${yearOfLive * 365 * 24 * 60} seconds.`);

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

console.log(`${day}/${month}/${year} - ${hour}:${minutes}`);

// Exercise Level 3

let dayStr = String(day);
dayStr.length > 1 ? (dayStr = dayStr) : (dayStr = `0${dayStr}`);
let monthStr = String(month);
monthStr.length > 1 ? (monthStr = monthStr) : (monthStr = `0${monthStr}`);
let hourStr = String(hour);
hourStr.length > 1 ? (hourStr = hourStr) : (hourStr = `0${hourStr}`);
let minutesStr = String(minutes);
minutesStr.length > 1
  ? (minutesStr = minutesStr)
  : (minutesStr = `0${minutesStr}`);

console.log(`${dayStr}/${monthStr}/${year} - ${hourStr}:${minutesStr}`);
