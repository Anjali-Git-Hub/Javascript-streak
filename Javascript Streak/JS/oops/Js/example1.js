// const user={
//     fname:'anjali',
//     age:19,
//     about(){
//         console.log(`Name is ${this.fname} and age is ${this.age}`);
//     },
//     isAdult(){
//         console.log(this.age>18)
//     }
// }

// console.log(user.fname)
// user.about()
// user.isAdult()

// function makeUser(fname,lname,age){
//     const obj={};
//     obj.fname=fname;
//     obj.lname=lname;
//     obj.age=age;
//     obj.about=function(){
//                     console.log(`Name is ${this.fname} and age is ${this.age}`);
//                 }
//     obj.isAdult=function(){
//         console.log(this.age>18)
//     }
//     return obj;

// }
// const user1=makeUser("anjali","li",8)
// const user2=makeUser("yashika","ka",45)
// console.log(user2)
// user2.about();
// console.log(user1)
// user1.isAdult()
// user1.about()



// now here is the problem ,if i will make 1000 users then 1000 methods also
// will be allocated memory , but they all have same definations .


// so im declaring it in a separate object , so that object once stored in memory and we will give the referance of the object 

// const methods={
// about:function(){
//     console.log(`Name is ${this.fname} and age is ${this.age}`);
// },
// isAdult:function(){
// console.log(this.age>18)
// }
// }

function about(){
        console.log(`Name is ${this.fname} and age is ${this.age}`);
    }
function isAdult(){
    console.log(this.age>18)
    }
function makeUser(fname,lname,age){
    const obj={};
    obj.fname=fname;
    obj.lname=lname;
    obj.age=age;
    obj.about=about;
    obj.isAdult=isAdult;
    return obj;

}
const user1=makeUser("anjali","li",8)
// user1.about()
// console.log(user1.about===about)
// const user2=makeUser("yashika","ka",45)