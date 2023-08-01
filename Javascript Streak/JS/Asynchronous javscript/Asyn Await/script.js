const url="https://jsonplaceholder.typicode.com/posts";
const getFromServer=async()=>{
    const value = await fetch(url);
    if(!value.ok){
        throw new Error("something went wrong")
    }
    const response= await value.json();
    return response;
}
getFromServer()
.then((data)=>{
    console.log(data)
})
.catch(()=>{
    console.log("reject")
})