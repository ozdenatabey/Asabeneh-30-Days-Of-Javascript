for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// Çarpım Tablosu Örneği
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
    if (j == 10) {
      console.log("-------------------");
    }
  }
}

// Dizi İçerisindeki Sayıların Ortalaması
let numbers = [3, 8, 45, 12, 89, 47, 6, 7, 13];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(`Ortalama = ${sum / numbers.length}`);

// "for of" Kullanımı
sum = 0;
for (let i of numbers) {
  sum += i;
}
console.log(sum);

// break Kullanımı
console.log("break kullanımı");
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// contiune Kullanımı
console.log("contiune kullanımı");
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Exercises Level 1

console.log("Exercise Level 1");

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
i = 0;

do {
  console.log(i);
  i++;
} while (i <= 10);

let str = "";
for (let i = 0; i <= 7; i++) {
  str += "#";
  console.log(str);
}

i = 0;
while (i <= 10) {
  console.log(`${i} x ${i} = ${i * i}`);
  i++;
}

console.log("i  i^2  i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i * i}  ${i * i * i}`);
}

i = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

i = 0;
while (i <= 100) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i++;
}

console.log("---------------");

for (let sayi = 2; sayi <= 100; sayi++) {
  let prime = true;
  for (let k = 2; k < sayi; k++) {
    if (sayi % k === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(sayi);
  }
}

console.log("---------------");

let total = 0;
let number = 0;
for (number = 0; number <= 100; number++) {
  total = total + number;
}
console.log(`The sum of 0 to ${number - 1} is ${total}`);

console.log("---------------");

number = 0;
let evenTotal = 0;
let oddTotal = 0;
for (number = 0; number <= 100; number++) {
  if (number % 2 == 0) {
    evenTotal += number;
  } else {
    oddTotal += number;
  }
}
console.log(
  `The sum of all evens from 0 to ${
    number - 1
  } is ${evenTotal}. And the sum of all odds from 0 to ${
    number - 1
  } is ${oddTotal}`
);

let totals = [];
totals.push(evenTotal);
totals.push(oddTotal);
console.log(totals);

console.log("---------------");

let arr = [];
i = 0;
while (i < 5) {
  let sayi = Math.floor(Math.random() * 10);
  if (arr.includes(sayi)) {
    continue;
  } else {
    arr.push(sayi);
  }
  i++;
}
console.log(arr);

// 15. soruda kaldım
