let arr = new Array(23, 123, 465, "apple");

// console.log(arr);

// console.log(arr.length);

// console.log(arr.isArray('23'));

// arr[1] = 'ajay';

let newArr = arr[1];

// console.log('element:', newArr);

// console.log(arr);

let price = [30, 60, 56, 78, 90, 34, 67];

let value = price.indexOf(56);
console.log(value);

/* Mutating
or 
Modifying arrays */

// price.push(999);
// console.log(price);

// price.unshift(101);
// console.log(price);

// price.pop()
// console.log(price);

// price.shift()
// console.log(price);

// price.splice(2,5);
// console.log(price);

// price.sort();
// console.log(price);

// price.reverse();
// console.log(price);

let addPrice = [99, 199, 299, 49];
price = price.concat(addPrice);
console.log(price);

let obj = {
  name: "Ajay",
  "last name": "Palsaniya",
  city: "Jaipur",
  profession: "Engineer",
  isActive: true
};

console.log(obj);
console.log(obj.isActive);
console.log(obj.name);
console.log(obj["last name"]);
