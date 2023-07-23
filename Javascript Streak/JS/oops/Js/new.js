// const methods={
//     about:function(){
//         console.log(`Name is ${this.fname} and age is ${this.age}`);
//     },
//     isAdult:function(){
//     console.log(this.age>18)
//     }
//     }
    
//     function makeUser(fname,lname,age){
//         const obj=Object.create(makeUser.prototype);
//         obj.fname=fname;
//         obj.lname=lname;
//         obj.age=age;
//         return obj
//     }
//   //console.log(makeUser.prototype)
//   makeUser.prototype.about=function(){
//     console.log(`Name is ${this.fname} and age is ${this.age}`);
// }
// makeUser.prototype.isAdult=function(){
//     console.log(this.age>18)
//     }
//   console.log(makeUser.prototype)
// const user1=makeUser("anjali","li",12);
// user1.about();



// now we use new keyword 
// new keyword is super powerful it makes an empty object and add the key value pairs automatically and automatically set the proto of the object to the protype of func and return the object 


function MakeUser(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
}
//console.log(makeUser.prototype)
MakeUser.prototype.about=function(){
console.log(`Name is ${this.fname} and age is ${this.age}`);
}
MakeUser.prototype.isAdult=function(){
console.log(this.age>18)
}
// console.log(MakeUser.prototype)
const user1=new MakeUser("anjali","li",12);
user1.about();
