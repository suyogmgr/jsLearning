

// let username;

// document.getElementById("myBtn").onclick = () =>{

//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;

// }

// let age = window.prompt("How old are you?")

// Number(age);

// age += 1;

// console.log(age);


const PI = 3.14;
let radius;
let circum;

document.getElementById("myBtn").onclick = () => {

    radius = document.getElementById("myTxt").value;
    radius = Number(radius);
    circum = 2 * PI * radius;
    document.getElementById("answer").textContent = circum;
}