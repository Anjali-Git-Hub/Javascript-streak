const input=document.querySelector("input");
const btn=document.querySelector("button")

// Trailing debouncing 

// function debounce(old){
//     return function optfunc(){
//         console.log("im enhanced function")
//         old()
//     }
// }
// function old(){
//     console.log("hi everyone")
// }
// const optimisedfunc=debounce(old);
// optimisedfunc()

// function debouncer(old,delay){
//     let settimeoutId;
//     return function(...args){
//         if(settimeoutId){
//            clearTimeout(settimeoutId);
//         }
//         settimeoutId=setTimeout(()=>{
//             old.call(this,...args)
//         },delay)
//     }
// }



// function old(e){
//     console.log(e.target.value);
// }
// const optfunc=debouncer(old,500);

// input.addEventListener("input",optfunc); 



// Leading debouncing 

function debouncer(old,delay,options={trailingDebouncing:true,leadingDebouncing:true }){
    let setTimeoutId=null;
    return function(...args){
        
    let isInvoked=false;
        if(setTimeoutId===null && options.leadingDebouncing){
            old.call(this,...args)
            isInvoked=true;
        }
        clearTimeout(setTimeoutId)
        setTimeoutId=setTimeout(()=>{
            if(options.trailingDebouncing && isInvoked){
                old.call(this,...args)
            }
            else{
                setTimeoutId=null;
            }
        },delay)
    }
}

function old(e){
    console.log(e.target)
}
const optfunc=debouncer(old,500)
btn.addEventListener("click",optfunc)
