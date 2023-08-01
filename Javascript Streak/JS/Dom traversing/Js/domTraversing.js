// const doc=document.getRootNode();
// const html=doc.childNodes[0];

// const head=html.childNodes[0];
// const textNode=head.nextSibling;
// const body=head.nextElementSibling;
// // console.log(body.textContent);

// console.dir(body.parentNode);

// console.log(textNode.textContent);

// const body=document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);



// how many classes are assigned to an element how to get it
const div=document.querySelector(".container");
console.log(div.classList);
div.classList.add("coloring")
div.classList.remove("coloring")
// console.log(div.classList.contains("coloring"));


// toogle 
div.classList.toggle("coloring")
div.classList.toggle("coloring")


