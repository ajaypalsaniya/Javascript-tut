console.log("IF ELSE".toUpperCase());

// if else statement without cheking type of operater only check with value
let driveAge = 21;

if (driveAge < 21) {
  console.log("you cant drive");
} else if (driveAge == 21) {
  console.log("your age is awesome,you can drive !");
} else {
  console.log("you can drive !");
}

// if else statement without cheking type of operater only check with value

let Age = 18;

if (Age < 18) {
  console.log("you can't vote");
} else if (Age === 18) {
  console.log("your age is awesome,you can vote !");
} else {
  console.log("you can vote !");
}

// check is variable is defind or not

if (typeof variable !== "undefined") {
  console.log("variable");
} else {
  console.log("variable is not defined !");
}

//with boolean condition

let canEnter = true;

if (canEnter == false) {
  console.log("You can not enter !");
} else {
  console.log("You can enter !");
}

//with 'and' ,'or' operater

if (canEnter && Age >= 18) {
  console.log("You can enter !");
} else {
  console.log("You can not enter !");
}

if (canEnter || Age >= 18) {
  console.log("You can enter !");
} else {
  console.log("You can not enter !");
}

//Ternery operator

console.log(Age == 21 ? "Age is 21" : "age is not 21");

//swith case
switch (Age) {
  case 21:
    console.log("you are 21");

    break;
  case 31:
    console.log("you are 31");
    break;
  default:
    console.log("your age is not here");
    break;
}
