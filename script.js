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

const checkBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visa");
const debitBtn = document.getElementById("debit");
const paypalBtn = document.getElementById("paypal");
const submitBtn = document.getElementById("myBtn");
const checkBoxRes = document.getElementById("checkResult");
const checkRadioRes = document.getElementById("radioResult");

submitBtn.onclick = function () {
  if (checkBox.checked) {
    checkBoxRes.textContent = `Third Project Selected`;
  } else {
    checkBoxRes.textContent = `Third Project Not Selected`;
  }

  if (visaBtn.checked) {
    checkRadioRes.textContent = `You have selected Visa`;
  } else if (debitBtn.checked) {
    checkRadioRes.textContent = `You have selected Debit`;
  } else if (paypalBtn.checked) {
    checkRadioRes.textContent = `You have selected Paypal`;
  } else {
    checkRadioRes.textContent = `You haven't selected anything`;
  }
};
