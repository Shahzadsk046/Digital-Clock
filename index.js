let elemid = document.getElementById("firstContainer");
let elemClass = document.getElementsByClassName("container");
let elemtn = document.getElementsByTagName("div");
let elemBtn = document.getElementsByClassName("btn");

elemClass[0].classList.add("bg-primary");

elemClass[0].classList.add("text-light");
// elemClass[0].classList.remove('text-light');

elemClass[0].style.fontSize = "18px";

elemClass[0].style.margin = "18px 0";

console.log(elemClass[0].innerText);

elemClass[0].innerText = "I'm Changed by JS";

console.log(elemClass[0].innerText);

let para = document.createElement("p");

para.innerText = "I am New Paragraph";
para.classList.add("bg-dark");

let para2 = document.createElement("p");

para2.innerText = "I am New Paragraph 2";
para2.classList.add("bg-dark");

console.log(elemtn[0]);

elemtn[0].appendChild(para);
elemtn[0].appendChild(para2);
console.log(elemtn[0]);

boldd = document.createElement("b");
boldd.innerText = "I am bold Element";

elemtn[0].replaceChild(boldd, para2);

// var num1 = 0;
// function addDiv() {
//   let div = document.createElement("div");
//   div.innerText = `I am Div Element Number ${(num1 += 1)}`;
//   elemtn[1].appendChild(div);
// }
// var num2 = 0;
// function addPara() {
//   let para = document.createElement("p");
//   para.innerText = `I am para Element Number ${(num2 += 1)}`;
//   elemtn[1].appendChild(para);
// }
// var num3 = 0;
// function addAnchor() {
//   let anchor = document.createElement("a");
// //   var link = document.createTextNode("This is link");
// //   anchor.appendChild(link)
//   anchor.title = "This is a Link";
//   anchor.href = "#";
//   anchor.innerText = `I am Anchor Element Number ${(num3 += 1)}`;
//   elemtn[1].appendChild(anchor);
//   console.log(anchor);
// }
// var num4 = 0;
// function addButton() {
//   let button = document.createElement("button");
//   button.innerText = `Button Number ${(num4 += 1)}`;
//   elemtn[1].appendChild(button);
// }

// Query Selectors in Javascript
sel = document.querySelector(".container");
// console.log(sel);
sel1 = document.querySelectorAll(".container");
// console.log(sel1);

// function clicked() {
//   console.log("The button was clicked");
// }

// window.onload = function () {
//   console.log("The Document was Loaded");
// };

// EVENTS IN JAVASCRIPT
// firstContainer.addEventListener('click', function(){
//     console.log("Click Hua")
// })

// elemid.addEventListener("click", function () {
//   console.log("Click Hua");
// });

// elemid.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// elemid.addEventListener('mouseout', function(){
//     console.log("Mouse Out of Container")
// })

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;

// elemid.addEventListener('mouseup', function(){
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//     console.log("Mouse leaved click on Container")
// })

// elemid.addEventListener('mousedown', function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We Have Clicked</b>";

//     console.log("Mouse Hold click on Container")
// })

// setTimeout and setInterval

// Arrow Function
// logkaro = () => {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b>We Have Clicked</b>";
//   console.log("I am your Log");
// };

// counter = 0;
// let increment = () => {
//   counter++;
//   console.log(counter);
// };

// setTimeout function
// let time = setTimeout(logkaro, 2000);

// setInterval function
// let clr = setInterval(()=>{
//   if(counter >= 6)
//   // {

//     clearInterval(clr)
//     increment();
//     // clearTimeout(time)
//   // }

// }, 1000);

// JavaScript localStorage
// localStorage.setItem('name','Shehzad')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name');
// localStorage.clear();
// console.log(localStorage)

// JSON
let data = {
  Name: "Shehzad Khan",
  ClassID: 148,
  Age: 24,
  University: "Sindh Madressatul Islam University",
};

let objToJSON = JSON.stringify(data);
console.log(objToJSON);
console.log(typeof objToJSON);
parsed = JSON.parse(
  `{"Name":"Shehzad Khan","ClassID":148,"Age":24,"University":"Sindh Madressatul Islam University"}`
);
console.log(parsed);
