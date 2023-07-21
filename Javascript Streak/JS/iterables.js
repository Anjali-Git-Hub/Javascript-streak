// iterables are those in which we can use for of loop.

// const num=1234;
// for (let number of num){
//     console.log(number);
// }
// error will come as numbers are not iterable

// const fname="anjali"
// for(let alphabet of fname){
//     console.log(alphabet);
// }
//yes we can use for of loops in strings so strings are iterable


// const obj={
//     fname:"anjali",
//     age:7
// };
// for (let keys of obj){
//     console.log(keys)
// }
// error - as objects are not iterable



// const arr=[2,3,"anjali"];
// for(let item of arr){
//     console.log(item)
// }

// arrays are iterable


// array like objects 
// that can be accessed through index 
// here we can use length property.

// const arr=[2,3,"anjali",true];
// console.log(arr.length);

// const fname="anjali";
// console.log(fname.length);
// console.log(fname[3]);



// set - it is an iterable.
// no index based access 
// unique items only.
// const numbers = new set([1,3,4]);
// console.log(numbers)
const num=new Set("anjali");
// const arr=[1,2,3,4];
num.add("rajni");
num.add(3);
num.add("shibu");
// console.log(num)
num.add([1,2,3,4]);
num.add([1,2,3,4]);

// console.log(num)
// if(num.has("shib")){
//     console.log("yeah")
// }
// else{
//     console.log("nahh")
// }

// console.log(num[1]);


// set of ids
const id=[1,2,4,5,5]
const ids= new Set(id);
console.log(ids)
let length=0;
for (let id of ids){
    length++;
    
}
console.log(length)