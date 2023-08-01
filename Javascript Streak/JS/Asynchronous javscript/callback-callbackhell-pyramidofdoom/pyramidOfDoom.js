const hd1=document.querySelector(".hd-1")
const hd2=document.querySelector(".hd-2")
const hd3=document.querySelector(".hd-3")
const hd4=document.querySelector(".hd-4")
const hd5=document.querySelector(".hd-5")
const hd6=document.querySelector(".hd-6")
const hd7=document.querySelector(".hd-7")


// function chngText(element,text,color,delay,onSuccess,onFailure){
//  if(typeof element!="undefined" && typeof text!="undefined" && typeof color!="undefined"){
//     setTimeout(()=>{
//     element.textContent=text;
//     element.style.color=color;
//     onSuccess();
//   },delay)
// }
// else{
//     onFailure();
// }

// }

// chngText(hd1,"one","violet",1000,()=>{
//     chngText(hd2,"two","pink",2000,()=>{
//         chngText(hd3,"three","red",1000,()=>{
//             chngText(hd4,"four","orange",1000,()=>{
//                 chngText(hd5,"five","grey",2000,()=>{
//                     chngText(hd6,"six","purple",1000,()=>{
//                         chngText(hd7,"seven","blue",2000,()=>{
    
//                         },()=>{
//                             console.log("failed");
//                         })
//                     },()=>{
//                         console.log("failed");
//                     })
//                 },()=>{
//                     console.log("failed");
//                 })
//             },()=>{
//                 console.log("failed");
//             })
//         },()=>{
//             console.log("failed");
//         })
//     },()=>{
//         console.log("failed");
//     })
// },()=>{
//     console.log("failed");
// })


function chngText(element,text,color,delay){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            if(element!="undefined"){
                 element.textContent=text;
                 element.style.color=color;
                 reslove();
            }
            else{
                reject(new Error("Failed!!"))
            }
            
        },delay);
    })

}

chngText(hd1,"one","violet",1000)
.then(()=> chngText(hd2,"two","red",2000))
.then(()=>chngText(hd3,"three","orange",1000))
.then(()=> chngText(hd4,"four","yellow",1000))
.then(()=>  chngText(hd5,"five","blue",2000))
.then(()=> chngText(hd6,"six","green",1000))
.then(()=>chngText(hd7,"seven","purple",2000))
.catch((error)=>{console.log(error)})



// chngText(hd1,"one","violet",1000).then(()=>{
//     return Promise.resolve( chngText(hd2,"two","orange",2000));

    
// }).then((value)=>{
//     console.log(value)
// })


