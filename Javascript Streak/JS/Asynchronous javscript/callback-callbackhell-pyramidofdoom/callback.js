// function takeCallback(callback){
//     console.log("taked callback !!!");
//     callback();
// }
// // function sayHi(){
// //     console.log("hey!!")
// // }
// takeCallback(()=>{
//     console.log("hey!!")
// });


// adding and multiplying two number 
function addingAndMultiply(num1,num2,onSuccess,onFailure){
    if(typeof num1==="number" && typeof num2==="number"){
        console.log(num1+num2);
        onSuccess(num1,num2);
    }
    else{
        onFailure();
    }
    

}
// function multiply(num1,num2){
//     console.log(num1*num2);
// }
addingAndMultiply(1,2,(num1,num2)=>{
    console.log(num1*num2);
},()=>{
    console.log("you haven't passed a number ")
})