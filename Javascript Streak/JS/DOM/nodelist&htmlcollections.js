"use strict";
// let anchors = document.getElementsByClassName("anchor");
// console.log(anchors);

// html collections are array like objects 
// 1. indexing 
// 2. length property

// console.log(anchor[2])
// console.log(anchor.length)

// we can use for loop forof loop to iterate html collections but we cannot use for each methods 


// for(let anchor of anchors){
//     anchor.style.color="blue";
//     anchor.style.display="block";

// }
// for(let i=0;i<anchors.length;i++){
//     anchors[i].style.padding="5px 10px";
//     anchors[i].style.textDecoration="none";
//     anchors[i].style.margin="5px";
//     anchors[i].style.background="lightblue";
// }
// anchors=Array.from(anchors)

// anchors.forEach((anchor)=>
// {anchor.style.fontSize="20px"}
// )



// in case of nodelist we can use all looping 
let anchors=document.querySelectorAll(".anchor");
// console.log(anchors) array like object


for(let anchor of anchors){
    anchor.style.color="blue";
    anchor.style.display="block";

}
for(let i=0;i<anchors.length;i++){
    anchors[i].style.padding="5px 10px";
    anchors[i].style.textDecoration="none";
    anchors[i].style.margin="5px";
    anchors[i].style.background="lightblue";
}

anchors.forEach((anchor)=>
{anchor.style.fontSize="20px"}
)

