console.log("welcome to my conversion");
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);

let boolVar = String(true);
console.log(boolVar, typeof boolVar);

let date = String(new Date());
console.log(date, typeof date);

let arr = String([1, 2, 3, 4, 5, 5]);
console.log(arr, typeof arr);

let i = 75;
console.log(i.toString());

let stri = Number("1001");
stri = Number("3434bx5"); //it will print not a number "NaN" b'coz it can't be  convert stri into number
stri = Number([1, 2, 3, 4, 5, 5]); // it will print not a number NaN b'coz Arr also can't be convert into number
console.log(stri, typeof stri);

let number = parseFloat("1001.890");
console.log(number.toFixed(2), typeof number);

//Type Corecion

let mystr = "691";
let num = 69;

console.log(mystr + num);
