// class Car{
//     constructor(gear,seats){
//     this.gear=gear;
//     this.seats=seats;
//     }
//     noOfSeats(){
//         console.log(this.seats);
//     }

// }
// const maruti=new Car(4,6);
// maruti.noOfSeats()
//now i want to not to call it but i want to acces the func as a property
// console.log(maruti.noOfSeats)  like this 


// use getter for this 
// class Car{
//     constructor(gear,seats){
//     this.gear=gear;
//     this.seats=seats;
//     }
//     get noOfSeats(){
//         console.log(this.seats);
//     }

// }
// const maruti=new Car(4,6);
// // maruti.noOfSeats()  now error
// maruti.noOfSeats





// setters 

// now i want to that if i pass fullname then it will change the firstname and lastname property 


class User{
    constructor(fname,lname){
    this.firstName=fname;
    this.lastName=lname;
    }

    // fullname(name){
    //     this.firstName=fname;
    //     this.lastName=lname;
    // }

    set fullname(fullname){
        const[fname,lname]=fullname.split(" ");
        this.firstName=fname;
        this.lastName=lname;
    }


}
const yashika=new User("yashika","ka");
// console.log(yashika.firstName)
// console.log(yashika.lastName)
yashika.fullname="anjali li"
console.log(yashika.firstName)
console.log(yashika.lastName)
