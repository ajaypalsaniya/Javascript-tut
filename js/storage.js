// add a key-value pair inside local storage

localStorage.setItem("firstName", "ajay");
localStorage.setItem("lastName", "palsaniya");
localStorage.setItem("age", 25);

// clear thr entire localStorage
// localStorage.clear();

// remove a particular key-value pair --
console.log(localStorage.getItem("age"));
// localStorage.removeItem('age');

let firstName = localStorage.getItem("firstName");
console.log(firstName);

console.log(localStorage.length);

let fruits = ["apple", "orange", "grapes", "kiwi"];
localStorage.setItem("fruits", JSON.stringify(fruits));

fruits = JSON.parse(localStorage.getItem("fruits"));
fruits.forEach(fruit => {
  console.log(fruit);
});

// session storage
sessionStorage.setItem("fName", "ajay");
sessionStorage.setItem("lName", "palsaniya");
sessionStorage.setItem("age", 25);
