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
