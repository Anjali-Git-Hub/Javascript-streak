// functions inside the object.

// const obj={
//     fname:'anjali',
//     age:19,
//     about:function(){
//         // console.log(`${this.fname},${this.about}`)
//         console.log(this);

//     }

// }
// console.log(obj)
// console.log(obj.fname)
// obj.about();



// function print(){
//     console.log(this.fname,this.age);
// }
// // print();

// const user1={
//     fname:'anjali',
//     age:16,
//     about:print
// };
// // console.log(user1)

// const user2={
//     fname:'yashika',
//     age:6,
//     about:print
// };
// user1.about();
// user2.about();


// window object
// console.log(this)
// console.log(window)


// "use strict";


// function win()
// {

//     console.log(this)
// }
// window.win()

// apply,call,bind 


// function hello(){
//     console.log('hi')
// }
// hello.call();
function print(favcolor,favcartoon){
    console.log(this.fname,favcolor,favcartoon);
}
const obj={
    fname:"anjali",
}

const obj2={
    fname:"yashika",
}
const func=print.bind(obj2,'blue','oggy');

func();

















