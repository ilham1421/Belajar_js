// const tahun = new Date().getFullYear();
// const teks = `Sekarang tahun ${tahun}`; //ini adalah tipe data string
// console.log(teks);

//tipe data number
// const result = 50 / 0;
// console.log(result); //Infinity

//jika number memiliki nilai bukan angka, maka
// const result = Number ('ilham');
// console.log(result); //NaN

//tipe data boolean
// const completed = true;
// const passed = false;
// console.log(completed, passed);

//penggunaan lain dari boolean
// const perbandingan = 10 > 9;
// console.log(perbandingan); //true

//tipe data null
// let message = null;
// console.log(message); //null

//tipe data undefined
// let kosong;
// console.log(kosong); //undefined

const name1 = { first: "ilham", last: null };
const name2 = { first: "ilham", last: undefined };

console.log(JSON.stringify(name1)); //{"first":"ilham","last":null}
console.log(JSON.stringify(name2)); //{"first":"ilham"}
