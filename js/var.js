// var not used in modern js
var name = "ajay";
var marks = 89;
console.log(name, marks);

let fruit = "apple";

let city = "Jaipur";

// let city = 'mumbai' ; can not assign city again

let arr = [2, 3, 4, 8, 32];
console.log(arr);
// let arr = [3, 5, 67, 78, 91]  can not assign arr again but we can add or delete element
arr.push(25);
console.log(arr);

{
  let city = "Delhi"; // can assign city again because it is inside block

  console.log(city);
}
console.log(city);
