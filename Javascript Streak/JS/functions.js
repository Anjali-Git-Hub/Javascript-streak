// "use strict";
// myfunc();
// function myfunc(){
//     console.log("hello yashika morning!!");
// }
// myfunc();
// function sum2numbers(num1,num2) //paramerters
// {
//     console.log(num1+num2);
// }
// sum2numbers(2);//arguments
// console.log(undefined+2);
// console.log(undefined+"anjali");

// function sum3numbers(num1,num2,num3){
//     return num1+num2+num3;
// }
// console.log(undefined+undefined)
// console.log(sum3numbers(2,3,4));
// function is_Even(num){
//     return num%2===0?"even":"odd";
// }

// console.log(is_Even(4))

// function expression
// const myfunc=function(){
//     console.log("hello yashika morning!!");
// }
// myfunc()

// const sum2numbers=function(num1,num2){
//     console.log(num1+num2);
// }
// sum2numbers(3,4);

// const sum3numbers=function(num1,num2,num3){
//     return num1+num2+num3;
// }
// console.log(sum3numbers(2,3,0))

// const is_Even=function(num){
//     return num%2===0?"even":"odd";
// }
// console.log(is_Even(7));


// arrow functions
// const myfunc=()=>"hello yashika morning!!";
// // console.log(myfunc());

// const sum2numbers=(num1,num2)=>num1+num2;
// // console.log(sum2numbers(2,3));

// const sum3numbers=(num1,num2,num3)=>num1+num2+num3;
// // console.log(sum3numbers(3,4,5));

// const is_Even=num=>num%2===0?"even":"odd";
// console.log(is_Even(5))

// hoisting

// myBad();
// function declaration
// function myBad(){
//     console.log("ohh i missed my guitar classes");
// }
// myBad();


// function expression
// myBad();
// const myBad=function(){
//     console.log("ohh i missed my guitar classes");
// }
// myBad();

// arrow functions
// myBad();
// const myBad=()=>console.log("ohh i missed my guitar classes");
// myBad();


// console.log(fName);
// var fName="anjali";
// console.log(fName);


// console.log(fName);
// let fName="anjali";
// console.log(fName);

// console.log(fName);
// const fName="anjali";
// console.log(fName);



// functions inside function

// function allRounder(){
//     function canFly(){
//         return("yes i can fly");
//     }
//     function canRun(){
//        return("yes i can run");
//     }
//     return canFly(); 
    
// }
// function allRounder(){
//     return function(){
//         return "i can fly"        
//     }
    
// }
// console.log(allRounder());
// const returned=allRounder();
// console.log(returned())

// lexical scoping
// const varioble=11;
// function myfunc(){
// // const varioble=9;
//     function findMe(){
//         // const varioble=3;
//         console.log("inside find me function",varioble);
//     }
//     findMe();
// }
// myfunc();

// function myfunc(){
//     if(-1){
//         const varioble=9;
//     }
//     console.log(varioble);
// }
// myfunc();

// block and function scope
{
    // const hi="hlww"
    // console.log(hi);
}
// console.log(hi);

{
    // var hi="hello"
    // console.log(hi);

}
// console.log(hi)




// const varioble=9;
// function myfunc(){
//     if(-1){
//         const varioble=9;
//     }
//     console.log(varioble);
// }
// myfunc();

//  DEFAULT PARAMETERS 
// before es6

// function add(num1,num2){
//   if (typeof num2==="undefined"){
//     num2=0;
//   }
//     console.log(num1+num2);
// }

// add(2)

// after es6

// function add(num1,num2=0){
//       console.log(num1+num2);
//   }
  
//   add(2)


// rest parameter
// function addLimilessNumbers(...nums){
//     let sum=0;
//    for(let num of nums){
//         sum=num+sum;
//    }
//     return sum;
// }

// console.log(addLimilessNumbers(1,2,3,3,4,5,4,5));

// parameter destructuring-is used with objects and mostly used in react

// const obj={
//     fName:"anjali",
//     age:19
// };

// function obj1({fName:firstName,age:umar}){
//     console.log(firstName)
//     console.log(umar)
// }

// obj1(obj);

//high order function
// callback functions
// function passMe(){
//     console.log("you can pass me")
// }
// function anything(any){
//     console.log(any);
//     any();  //this is know as call back functions .
// }

// function callme(callback){
//     return callback;
// }
// function hifunc(){
//     console.log("hi func");
// }

// const variable=callme(hifunc);
// variable();





// anything(passMe)

//high order function
// functions returning functions
// function anything(){
//     return function sayHi(){
//         return "hello";
//     }
// }

// let returnedFunc=anything();
// // console.log(returnedFunc)
// console.log(returnedFunc());































