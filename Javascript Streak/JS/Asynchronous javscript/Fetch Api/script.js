const url="https://jsonplaceholder.typicode.com/posts";
fetch(url)
.then((resolve)=>{
    if(resolve.ok){
        return resolve.json();
    }
    else{
        throw new Error("something went wrong !!")
    }
})
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})