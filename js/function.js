// This function take name as argument and return greeet message for given name.

function greet(name) {
  console.log(
    `congrats ${name} My heartiest congratulations to you for this great success of yours. Keep bringing these little joys to us every year! My best wishes are for you always!`
  );
}

let name = "xyz";
let name1 = "abc";
greet(name);
greet(name1);

// function inside object;

let obj = {
  name: "ajay",
  bike: function() {
    return "KTM";
  }
};

console.log(obj.bike());
