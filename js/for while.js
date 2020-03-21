//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop

let j = 0;
while (j < 49) {
  console.log(j);
  j += 1;
}

// do while loop

let k = 0;
do {
  console.log(k + 1);
  k += 1;
} while (k < 15); //this is like while loop

/* this loop will run only 1 time because in first iter condition
 will be false but do while loop run 1 time, also if condition is false. */

let l = 50;
do {
  console.log(l + 1);
  k += 1;
} while (l < 15);

// with break and continue

let a = 0;
do {
  if (a === 5) {
    continue;
  }
  console.log(a);
  a += 1;
  if (a === 8) {
    break;
  }

  a += 1;
} while (a < 15);

// iter
let arr = [1, 2, 5, 6, 7, 9, 21, 34];

arr.forEach(function(element) {
  console.log(element);
});

let obj = {
  name : 'ajay',
  age : 25,
  city : 'Jaipur'
}

for (let key in obj){
  console.log(`${key} is ${obj[key]}`);
}