// alert('connect');
let heading = document.createElement("h3");
heading.innerHTML = "Go to google";
heading.id = "heading";

let ancor = document.querySelector(".edit");
ancor.appendChild(heading);

heading = document.createElement("a");
heading.innerHTML = "<h1>Google</h1>";
heading.setAttribute("href", "//www.google.com");
heading.style.textDecoration = 'none'

ancor.appendChild(heading);
