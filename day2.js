let a = "30 Days Of Javascript";
upperA = a.toUpperCase();
lowerA = a.toLowerCase();

let b = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let c =
  "You cannot end a sentence with because because because is a conjunction";

let d = "30 Days ";
let e = " Of Javascript";

console.log(a);
console.log(a.length);
console.log(upperA);
console.log(lowerA);
console.log(a.substring(2));
console.log(a.includes(String));
console.log(a.split(" "));
console.log(b.split(","));
console.log(a.replace("Javascript", "Python"));
console.log(a.charAt(15));
console.log(a.charCodeAt("J"));
console.log(a.indexOf("a"));
console.log(a.lastIndexOf("a"));
console.log(c.indexOf("because"));
console.log(c.lastIndexOf("because"));
console.log(c.search("because"));
console.log(a.trim(" "));
console.log(a.startsWith("3"));
console.log(a.endsWith("script"));
console.log(a.match("a"));
console.log(d.concat(e));
console.log(a.repeat(2));

//exercise 2

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

let numStr = "10";
let convert = parseInt(numStr);
console.log(convert === 10);

let numFloat = "9.8";
convert = parseFloat(numFloat);
console.log(Math.round(convert) === 10);
console.log("python", "jargon".match("on"));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 10) + 10);
console.log("JavaScript"[Math.floor(Math.random() * "JavaScript".length)]);

let f =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(f.match(/love/gi));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(
  sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
);

const text2 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let convertToDigit = text2.match(/\d+/g);

num1 = parseInt(convertToDigit[0]);
num2 = parseInt(convertToDigit[1]);
num3 = parseInt(convertToDigit[2]);

console.log(num1 + num2 + num3);
