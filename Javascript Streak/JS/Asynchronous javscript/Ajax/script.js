// 1:xhr
// const xhr=new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState)
// xhr.open("GET","https://jsonplaceholder.typicode.com/posts")
// console.log(xhr.readyState)
//     // xhr.onreadystatechange=()=>{
//     //     if(xhr.readyState===4){
//     //          const response=xhr.responseText;
//     //         const responseObj=JSON.parse(response)
//     //         console.log(responseObj);
//     //     }
//     // }


//     xhr.onload=()=>{
//         const response=xhr.responseText;
//                 const responseObj=JSON.parse(response)
//                 console.log(responseObj);
//     }
// xhr.send();
// error handling 
// const xhr=new XMLHttpRequest();
// xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
// xhr.onload=()=>{
//     if(xhr.status>=200 && xhr.status<300){
//        const data= JSON.parse(xhr.responseText)
//        console.log(data);
//     }
//     else{
//         console.log("something went wrong...")
//     }
//     // network failure
// }
// xhr.onerror=()=>{
//     console.log(new Error("Network Failure"));
// }

// xhr.send();

// promisiify
const xhr=new XMLHttpRequest();
function request(method,url){
    return new Promise((resolve,reject)=>{

        xhr.open(method,url);
        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
                       const data= JSON.parse(xhr.responseText)
                       resolve(data);
                    
                    }
            else{
                        reject("something went wrong...")
                }
        }
        xhr.onerror=()=>{
            console.log(new Error("Network failure!!!"))
        }
        xhr.send();

    })
}

// consume promises

request("GET","https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    console.log(response)
    const id=response[3].id;
    const url="https://jsonplaceholder.typicode.com/posts"
    const newUrl=`${url}/${id}`
    return request("GET",newUrl)
})
.then((value)=>{
    console.log(value)
})
.catch((reject)=>{
    console.log(reject)
})
































