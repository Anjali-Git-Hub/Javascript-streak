"use strict";
// get element by id
const body=document.body
const sec1=body.getElementsByTagName("div#sec-1")
console.log(sec1)
console.log(sec1.childNodes)
const p=document.createElement("p")
p.textContent="hello";
sec1.append(p)
// const sec1=document.querySelector("div#sec-1");
// console.log(sec1) 

// change text 
// const text2=document.querySelector(".text2");
// console.log(text2)
// text2.style.color="blue";
// text2.style.backgroundColor="lightblue";

// console.log(text.textContent)
// text.textContent="Hi javscript!!"
// console.log(text.textContent)
// console.log(text.innerText)
