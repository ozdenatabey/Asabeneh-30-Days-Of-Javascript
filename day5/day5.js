// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ]; // List of countries

// console.log(countries); // -> all countries in array
// console.log(countries[0]); //  -> Albania
// console.log(countries[3]); //  -> Kenya

// let lastIndex = countries.length - 1;
// console.log(countries[lastIndex]); //  -> Kenya

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "Vue",
//   "Angular",
// ];
// console.log(webTechs.join(" # "));

// webTechs.unshift("PHP");

// console.log(webTechs.join(" # "));

// // Exercise Level 1

// const myArray = [3, 8, -6, 22, -18, 4, 35];
// console.log(myArray.length);
// let firstItem = 0;
// let lastItem = myArray.length - 1;
// let midItem = lastItem / 2;
// console.log(myArray);
// console.log(`The first item of the array: ${myArray[firstItem]}`);
// console.log(`The middle item of the array: ${myArray[midItem]}`);
// console.log(`The last item of the array: ${myArray[lastItem]}`);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Meta",
  "Amazon",
  "Twitter",
];
console.log(itCompanies);
console.log(`Number of items in array: ${itCompanies.length}`);
console.log(`The first company in array: ${itCompanies[0]}`);
console.log(
  `The middle company in array: ${itCompanies[(itCompanies.length - 1) / 2]}`
);
console.log(
  `The last company in array: ${itCompanies[itCompanies.length - 1]}`
);

console.log(itCompanies.toString());
console.log(itCompanies.toString().toUpperCase());

let lastItem = itCompanies.slice(-1);

console.log(`${itCompanies.toString()} and ${lastItem} are big IT companies.`);

let search = prompt("Find the company..");
if (itCompanies.includes(search)) {
  alert(`${search} is in the list.`);
} else {
  alert("Not found!");
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(0, itCompanies.length - 3));
console.log(itCompanies);
console.log(
  itCompanies.slice(
    (itCompanies.length - 1) / 2,
    (itCompanies.length - 1) / 2 + 1
  )
);
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice((itCompanies.length - 1) / 2, (itCompanies.length - 1) / 2);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
