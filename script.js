// let username;

// document.getElementById("myBtn").onclick = () =>{

//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;

// }

// let age = window.prompt("How old are you?")

// Number(age);

// age += 1;

// console.log(age);

// const PI = 3.14;
// let radius;
// let circum;

// document.getElementById("myBtn").onclick = () => {

//     radius = document.getElementById("myTxt").value;
//     radius = Number(radius);
//     circum = 2 * PI * radius;
//     document.getElementById("answer").textContent = circum + "cm";
// }

//Number add,reset and decrease

// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const increaseBtn = document.getElementById("increase");
// const displayLabel = document.getElementById("display");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     displayLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     displayLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     displayLabel.textContent = count;
// }

// const checkBox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visa");
// const debitBtn = document.getElementById("debit");
// const paypalBtn = document.getElementById("paypal");
// const submitBtn = document.getElementById("myBtn");
// const checkBoxRes = document.getElementById("checkResult");
// const checkRadioRes = document.getElementById("radioResult");

// submitBtn.onclick = function () {
//   if (checkBox.checked) {
//     checkBoxRes.textContent = `Third Project Selected`;
//   } else {
//     checkBoxRes.textContent = `Third Project Not Selected`;
//   }

//   if (visaBtn.checked) {
//     checkRadioRes.textContent = `You have selected Visa`;
//   } else if (debitBtn.checked) {
//     checkRadioRes.textContent = `You have selected Debit`;
//   } else if (paypalBtn.checked) {
//     checkRadioRes.textContent = `You have selected Paypal`;
//   } else {
//     checkRadioRes.textContent = `You haven't selected anything`;
//   }
// };

// -------------- SLICING ------------------
// let email = "suyogido@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1);

// console.log(username);
// console.log(extension);

// -------------- METHOD CHAINING ------------------

//first without method chaning

// let username = window.prompt("Enter your user name:");

//  username = username.trim(); //to remove the whitespace

//  let letter = username.charAt(0);

// letter = letter.toUpperCase();

// let remaning = username.slice(1);
// remaning = remaning.toLowerCase();

// let all = letter + remaning;
// console.log(all);

// ------- With Method Chaining ----------

// username =

//   username.trim().charAt(0).toUpperCase() +

//   username.trim().slice(1).toLowerCase();

// console.log(username);

// ----------- Number Guessing Game ---------------
/*
const minNumber = 1;
const maxNumber = 100;

const answer =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNumber} and ${maxNumber}:`);
    guess = Number(guess);

    if(guess < minNumber || guess > maxNumber){
        window.alert(`Please enter a valid number`);
    }else if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }else {
        attempts++;
        if(guess < answer){
            window.alert(`TOO SMALL! GUESS AGAIN`);
        }else if(guess > answer){
            window.alert(`TOO HIGH! GUESS AGAIN`);
        }else{
            window.alert(`You are correct the number was ${answer}, It took you ${attempts} attempts`);
            running = false;
        }
    }

}
*/

//-----------------------------------------Draft------------------------------------------------

// while(running){

//     guess = window.prompt(`Enter a number between ${minNumber} and ${maxNumber}:`);
//     guess = Number(guess);
//     if(isNaN(guess)){
//         window.alert("Please enter a valid Number");

//     }else if(guess < minNumber || guess > maxNumber){
//         window.alert("Please enter a valid Number")
//     }
//     else{
//         attempts++;

//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}, It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }

// ---------------- Temperature Converter --------------------

/*const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const answer = document.getElementById("result");
const display = document.getElementById("display-box");*/

// let temp;

// function convert() {

//   if (toFarenheit.checked) {
//     temp = Number(display.value);
//     temp = temp * 9 / 5 + 32;
//     answer.textContent = temp.toFixed(1) + "°F";
//     console.log("F");
//   }
//   else if (toCelsius.checked) {
//     temp = Number(display.value);
//     temp = (temp - 32) * (5/9);
//     answer.textContent = temp.toFixed(1) + "°C";
//     console.log("C");
//   }
//   else {
//     answer.textContent = "Select a Unit";
//     console.log("check");
//   }
// }

//------------- Dice Roller ----------------

// function rollDice(){
//     const numberOfDice = document.getElementById("display-box").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImage = document.getElementById("diceImage");
//     const values = [];
//     const images = [];

//     for(let i = 0; i < numberOfDice; i++){
//       const value = Math.floor(Math.random()*6)+1;
//       values.push(value);
//       images.push(`<img src = "dice_images/${value}.png" alt="dice_images">`);

//     }

//     diceResult.textContent = `dice ${values.join(", ")}`;
//     diceImage.innerHTML = images.join('');
// }

// -------------- Spread Operator ------------------

// let name = 'suyog';

// let spread = [...name].join("-");

// console.log(spread);

// --------------- Rest Parameters ----------------

// function rest(...restPara){
//     console.log(...restPara);
// }

// let a = 'idk';
// let b = 'ok';
// let c = 'ido';
// let d = 'oi';

// rest(a,b,c,d);

// -------------- Random Password Generator -------------------

function passwordGenerator(
  passwordLength,
  includeLowerCase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "£$%^&*()_+-=/|\~#¬";

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += includeLowerCase ? lowerCase : "";
    allowedCharacters += includeUppercase ? upperCase : "";
    allowedCharacters += includeNumbers ? numbers : "";
    allowedCharacters += includeSymbols ? symbols : "";

    if(passwordLength <= 0){
        return `(pasword length must be 1)`;
    }

    if(allowedCharacters === 0){
        return `(Al least one set of characters need to be selected)`;
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];
    }

    return password;
}

const passwordLength = 8;
const includeLowerCase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = passwordGenerator(
  passwordLength,
  includeLowerCase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated Password: ${password}`);