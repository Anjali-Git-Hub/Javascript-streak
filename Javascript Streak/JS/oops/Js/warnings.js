// some points to keep in mind 
// const obj={
//     fname:'anjali',
//     age:9,
//     about:function(){
//         console.log(this)
//         console.log(this.fname,this.age);
//     }
// }
// const variable=obj.about.bind(obj);
// console.log(variable)
// variable();

// const obj2={
//     fname:"meena",
//     age:5,
//     key1:obj.about,
// }
// console.log(obj2.key1)
// obj2.key1()




// different behaviour of arrow functions 
// they do not have their own this , it gets its value from surroundings 

// const arrowunderstand={
//     fname:'meena',
//     lname:'rawat',
//     arrow:{
//     fname:'anjali',
//     lname:'li',
//     about:()=>{
//         console.log(this);
//        console.log( `My name is ${this.fname} and my last name is ${this.lname}` )
//     }
// }
// }
// arrowunderstand.arrow.about()

// const arrow={
//     fname:'anjali',
//     lname:'li',
//     about(){
//         console.log(this);
//        console.log( `My name is ${this.fname} and my last name is ${this.lname}` )
//     }
// }
// arrow.about()










