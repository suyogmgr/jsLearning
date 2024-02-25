

let username;

document.getElementById("myBtn").onclick = () =>{

    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;

}

// let age = window.prompt("How old are you?")

// Number(age);

// age += 1;

// console.log(age);