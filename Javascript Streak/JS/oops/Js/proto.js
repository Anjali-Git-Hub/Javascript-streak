// condition2:- i want to add one more method in my object so to do this i have to add this method in both the objects .
// now if i want to add 20 methods then i have to make add all these 20 methods in both the objects and that is very tedious work


// __proto__(dunder)
// const obj1={
//     favcartoon:"oggy",
//     isTrue:true
// }
// // const obj2={
// //     favsinger:"atif aslam",
// // }
// // console.log(obj2.favsinger)
// // console.log(obj2.favcartoon)

// const obj2=Object.create(obj1);

// obj2.favsinger="atif aslam";
// console.log(obj2.__proto__)
// console.log(obj2.favcartoon)




const methods={
about:function(){
    console.log(`Name is ${this.fname} and age is ${this.age}`);
},
isAdult:function(){
console.log(this.age>18)
}
}




function makeUser(fname,lname,age){
    const obj=Object.create(methods);
    obj.fname=fname;
    obj.lname=lname;
    obj.age=age;
    return obj
}
const user1=makeUser("anjali","li",8)
// user1.about()
console.log(user1.__proto__)