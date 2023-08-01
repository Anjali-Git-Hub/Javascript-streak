// const button = document.querySelector("button");
// console.log(button)
// button.onclick=function(){
//     console.log("hi")
// }

// button.addEventListener("click",function(){
//    button.style.background="#aaaaaa";
//    button.style.color="bcbcbc";
//    button.style.border="none";

// })

// const buttons=document.querySelectorAll("button");
// console.log(buttons)

// buttons.forEach(button=>{
//     button.addEventListener("click",function(){
//            button.style.background="#aaaaaa";
//            button.style.color="bcbcbc";
//            button.style.border="none";
//            console.log(this);
        
//         })
// })


// 90% of cases we uses arrow functions

// for(let button of buttons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget)
//     })
// }


// behind the scene

// browser -> js engine + web apis 

console.log("starts")
const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let sum=0;
        for(let i=0;i<1000000000;i++){
            sum+=i;
        }
        console.log(e.currentTarget.textContent,sum);
    })
})


let variable=0;
        for(let i=0;i<100000000;i++){
            variable+=i;
        }

console.log("ends",variable)





















