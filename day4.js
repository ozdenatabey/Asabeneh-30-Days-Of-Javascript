// let a = parseInt(prompt("Enter the value"));
// if (a > 0) {
//   alert(`${a} is a positive number.`);
// } else if (a == 0) {
//   alert(`${a} is equal to zero.`);
// } else if (a < 0) {
//   alert(`${a} is a negative number.`);
// } else {
//   alert(`It is a not number.`);
// }

// switch (true) {
//   case a < 0:
//     console.log(`${a} is negative`);
//     break;
//   case a == 0:
//     console.log(`${a} is zero`);
//     break;
//   case a > 0:
//     console.log(`${a} is positive`);
//     break;
//   default:
//     console.log(`This is not number`);
//     break;
// }

// // Exercise Level 1

// let age = parseInt(prompt("Enter your age"));
// if (age > 18) {
//   alert("You are old enough to drive.");
// } else {
//   alert(`You are left with ${18 - age} years to drive.`);
// }

// let myAge = parseInt(prompt("My age is:"));
// let yourAge = parseInt(prompt("Your age is:"));
// if (myAge < yourAge) {
//   alert(`You are ${yourAge - myAge} years older than me.`);
// } else if (myAge > yourAge) {
//   alert(`I am ${myAge - yourAge} years older than you.`);
// } else if (myAge == yourAge) {
//   alert("We are same age.");
// } else {
//   alert("The values which entered are invalid!");
// }

// let a = parseInt(prompt("Enter first number"));
// let b = parseInt(prompt("Enter second number"));
// a < b
//   ? console.log(`${a} is lower than ${b}`)
//   : console.log(`${a} is greater than ${b}`);

// let num = parseInt(prompt("Enter a number"));
// num % 2 == 0
//   ? console.log(`${num} is even number`)
//   : console.log(`${num} is odd number`);

// // Exercise Level 2

// let note = parseInt(prompt("Enter your note:"));
// switch (true) {
//   case 80 <= note:
//     console.log("Your degree is A");
//     break;
//   case 70 <= note:
//     console.log("Your degree is B");
//     break;
//   case 60 <= note:
//     console.log("Your degree is C");
//     break;
//   case 50 <= note:
//     console.log("Your degree is D");
//     break;
//   case 0 <= note:
//     console.log("Your degree is F");
//     break;
// }

// let month = prompt("Hangi aydayız?");
// switch (month.toLowerCase()) {
//   case "eylül":
//   case "ekim":
//   case "kasım":
//     alert("Sonbahar");
//     break;
//   case "aralık":
//   case "ocak":
//   case "şubat":
//     alert("Kış");
//     break;
//   case "mart":
//   case "nisan":
//   case "mayıs":
//     alert("İlkbahar");
//     break;
//   case "haziran":
//   case "temmuz":
//   case "ağustos":
//     alert("Yaz");
//     break;
//   default:
//     alert("Hatalı giriş yapıldı!");
// }

// // Exercise Level 3

let month = prompt("Hangi aydayız?");

switch (month.toLowerCase()) {
  case "ocak":
  case "mart":
  case "temmuz":
  case "ağustos":
  case "ekim":
  case "aralık":
    alert(
      `${
        month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
      } 31 gündür.`
    );
    break;
  case "nisan":
  case "haziran":
  case "eylül":
  case "kasım":
    alert(
      `${
        month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
      } 30 gündür.`
    );
    break;
  case "şubat":
    alert(
      `${
        month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
      } 29 gündür.`
    );
    break;
  default:
    alert("Hatalı değer!");
}
