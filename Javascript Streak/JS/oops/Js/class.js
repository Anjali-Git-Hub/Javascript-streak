// classes are fake.
class MakeUser{
    constructor(fname,lname,age){
        console.log("constructor called")
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    about(){
        console.log(`Name is ${this.fname} and age is ${this.age}`);

    }
    isAdult(){
        console.log(this.age>18)

    }
}


class Employee extends MakeUser{
    constructor(name,age,speed){
    super(name,age)
    this.sp=speed
    }
    sing(){
        console.log('yes it can sing ');
    }
    speed(){
        console.log(`running with ${this.sp} `)
    }

}
const user2=new Employee('yashika',9,93)
user2.about()
user2.isAdult()
user2.sing()
user2.speed()
// const user1=new MakeUser("anjali","li",12);
// console.log(MakeUser.prototype)



// function MakeUser(fname,lname,age){
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
// }
// //console.log(makeUser.prototype)
// MakeUser.prototype.about=function(){
// console.log(`Name is ${this.fname} and age is ${this.age}`);
// }
// MakeUser.prototype.isAdult=function(){
// console.log(this.age>18)
// }
// // console.log(MakeUser.prototype)
// const user1=new MakeUser("anjali","li",12);
// user1.about();
