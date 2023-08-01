// 1. innerhtml
// const div=document.querySelector("div");
// console.log(div)
// div.innerHTML+="<p>hello world</p>"
// no use .


// 2. we have some useful methods for that
// createElement() 
// remove 
// append / appendChild
// before and after()


// const p=document.createElement("p");
// const div=document.querySelector("div");
// console.log(p);
// const textcontent=document.createTextNode("hello world");
// p.appendChild(textcontent);
// console.log(p);
// div.append(p);



// const p=document.createElement("p");
// const div=document.querySelector("div");
// p.textContent="hiii"
// div.append(p);
// p.remove();
// const p2=p.cloneNode(true);
// const p3=p.cloneNode(true);


// div.prepend(p3)
// before and after
// div.before(p);
// div.after(p2);



// 3.insertAdjacentHtml
// const div=document.querySelector("div");
// div.insertAdjacentHTML("afterbegin","<p>helloii</p>")


// static / live list
// const div=document.querySelector("div");
// const ps=div.getElementsByTagName("p");
// const newele=document.createElement("p");
// // console.log(newele)
// newele.textContent="hi world";
// div.append(newele);
// console.log(ps)
// live list 

// const div=document.querySelector("div");
// const ps=div.querySelectorAll("p");
// const newele=document.createElement("p");
// // console.log(newele)
// newele.textContent="hi world";
// div.append(newele);
// console.log(ps)
//static list 












