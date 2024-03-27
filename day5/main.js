import { webTechs } from "./web_techs.js";
import { countries } from "./countries.js";

console.log(webTechs);
console.log(countries);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/[^\w\s]|/g, "");
console.log(text);
let words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
const filteredShoppingCart = shoppingCart.filter(
  (element) => element != "Honey"
);
console.log(filteredShoppingCart);
filteredShoppingCart[3] = "Green Tea";
console.log(filteredShoppingCart);

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
console.log(countries);

if (webTechs.includes("Sass")) {
  console.log("Sass is a preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(`Min age is ${ages[0]}`);
console.log(`Max age is ${ages[ages.length - 1]}`);
console.log(
  `Median age is ${(ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2}`
);
let total =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];
let average = total / ages.length;
console.log(`Average age is ${average}`);
console.log(`Range of ages is ${ages[9] - ages[0]}`);
console.log(`Min average is ${Math.abs(ages[0] - average)}`);
console.log(`Max average is ${Math.abs(ages[9] - average)}`);

console.log(`Countries are: ${countries}`);
if (countries.length % 2 == 0) {
  console.log(
    `Middle country(ies): ${countries[(countries.length - 1) / 2]},${
      countries[(countries.length + 1) / 2]
    }`
  );
} else {
  console.log(`Middle country(ies): ${countries[(countries.length - 1) / 2]}`);
}

if (countries.length % 2 == 0) {
  console.log(
    `First half of countries are: ${countries.slice(
      0,
      countries.length / 2 - 1
    )}`
  );
  console.log(
    `Second half of countries are: ${countries.slice(
      countries.length / 2 - 1,
      countries.length - 1
    )}`
  );
} else {
  console.log(
    `First half of countries are: ${countries.slice(
      0,
      (countries.length + 1) / 2
    )}`
  );
  console.log(
    `Second half of countries are: ${countries.slice(
      (countries.length + 1) / 2,
      countries.length
    )}`
  );
}
