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

// let a = 'idk';git
// let b = 'ok';
// let c = 'ido';
// let d = 'oi';

// rest(a,b,c,d);

// -------------- Random Password Generator -------------------

// function randomPasswordGenerator(
//     passwordLength, 
//     includeLowerCase, 
//     includeUpperCase, 
//     includeNumber, 
//     includeSymbols){
    
    

//     const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numChars = "0123456789";
//     const symbolChars = "!£$%^&*()-_+/\|@~#?',><.¬`";

//     let allowedCharacters ="";
//     let password ="";

//     allowedCharacters += includeLowerCase ? lowerCaseChars : "";

    // if(includeLowerCase === true){
    //     allowedCharacters += lowerCaseChars; 
    // }else{
    //     allowedCharacters += "";
    // }

//     allowedCharacters += includeUpperCase ? upperCaseChars : "";
//     allowedCharacters += includeNumber ? numChars : "";
//     allowedCharacters += includeSymbols ? symbolChars : "";
        
//     if(passwordLength <= 0){
//         return `(Your password cannot be empty)`;
//     }

//     if(allowedCharacters <= 0){
//         return `(At least one character should be selected)`;
//     }
 
//     for(let i = 0; i<passwordLength; i++){
//         const generatedPassword = Math.floor(Math.random()*allowedCharacters.length);
//         password += allowedCharacters[generatedPassword];
//     }

//     return password;
// }

// const passwordLength = 2;
// const includeLowerCase = true;
// const includeUpperCase = false;
// const includeNumber = false;
// const includeSymbols = false;

// const password = randomPasswordGenerator(
//      passwordLength,
//      includeLowerCase, 
//      includeUpperCase, 
//      includeNumber, 
//      includeSymbols);

// console.log(password);

//  ----------- CallBacks --------------
// hello(world);

// function hello(world){
//     console.log("Hello");
//     world();
// }

// function world(){
//     console.log("World")
// }

// ----------- ForEach -------------

// let numbers = [1,2,3,4,5,6,7,8];

// numbers.forEach(all);

// function all(element){
//     console.log(element);
// }

// ------------ Filter ------------

// let numbers = [1,2,4,5,3,6,7,8,9];
// let ages = [22,31,11,23,23,12,14,15,19];

// let allowed = ages.filter(adult);
// console.log(allowed);

// let evenNum = numbers.filter(even);
// console.log(evenNum);

// let oddNum = numbers.filter(odd);
// console.log(oddNum);

// function even(element){
//     return element % 2 === 0;
// }

// function odd(element){
//     return element % 2 !== 0;
// }

// function adult(element){
//     return element >= 18;
// }

//---------- Arrow funcitons ----------------
// setTimeout(function(){
//     console.log("Hello World");
// }, 3000);

// const numbers = [1,2,3,4,5,6,7,8,9];


// const square = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// const arrowSquare = numbers.map(element => Math.pow(element,2));

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });

// console.log(arrowSquare);
// console.log(square);
// console.log(evenNums);

// ------------------ Objects ----------------


// const person = {
//     firstName: "Suyog",
//     middleName: "Rana",
//     lastName: "Magar",
//     doTheThing:() =>{console.log(`Hey, I'm ${this.firstName}`)},
// }

// console.log(person.firstName);
// person.doTheThing();


// ---------- Classes --------------

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     displayResult(){
//         console.log(`My name is ${this.name}`);
//         console.log(`My age is ${this.age}`);
//     }
// }

// let details = new Person("Suyog", 19);

// details.displayResult();

