// //mengubah ke string
// const number = 123;
// const boolean = true;

// const strNumber = String(number + 123231);
// const strBoolean = boolean.toString();

// console.log(strNumber); // "123"
// console.log(strBoolean); // "true"

// //mengubah ke number
// const strNumber = '123';
// const strFloat = '3.14';
// const boolean = true;

// const numFromString = Number(strNumber);
// const floatFromString = Number(strFloat);
// const numFromBoolean = Number(boolean);

// console.log(numFromString); // output: 123
// console.log(floatFromString); // output: 3.14
// console.log(numFromBoolean); // output: 1

//fungsi parseInt dan parseFloat
// const cm = "24cm";
// const inch = "9.45inch";

// const intCm = parseInt(cm);
// const floatInch = parseFloat(inch);
// console.log(intCm); // 24
// console.log(floatInch); // 9.45

// //mengubah ke boolean
// const number = 123;
// const string = 'Dicoding';
// const empty = null;

// const boolFromNumber = Boolean(number);
// const boolFromString = Boolean(string);
// const boolFromNull = Boolean(empty);

// console.log(boolFromNumber); // output: true
// console.log(boolFromString); // output: true
// console.log(boolFromNull); // output: false karena null dianggap false

//konversi implisit menggunakan operator
const age = 21;
const pesan = "umur saya adalah " + age + " tahun";
console.log(pesan); //umur saya adalah 21 tahun
