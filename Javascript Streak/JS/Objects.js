// objects
// const key="email";
// const obj1={
//     name:"anjali",
//     age:4,
//     friends:['preeti','ajay','sejal']
// };
// console.log(obj1)
// acess the key-value pair of the object
// console.log(obj1.friends[1]);

// console.log(typeof obj1)

// iterate object 
// forof loop

// obj1[key]="anjali@gmail.com";
// console.log(obj1)

// bracket notation
// console.log(obj1["name"]);
// console.log(obj1["name"]);
// console.log(obj1["friends name"]);


// for (let key in obj1){
//     console.log(obj1.key);
// }

const obj1={
    name:"anjali",
    age:4,
    friends:['preeti','ajay','sejal'],
    status:"they all left me",
    is_true:true
};
obj1["gender"]="female";
console.log(obj1);
// object destructuring
// const{name:naam,friends:ends,...rest}=obj1
// console.log(name);
// console.log(age)
// console.log(naam,agee);
// console.log(naam);
// console.log(ends)
// console.log(rest)

// console.log(Object.keys(obj1))

// for(keys of Object.keys(obj1)){
//     console.log(obj1[keys])
// }

// objects inside array 
// let users=[
//     {userId:"user1",userName:"anjali"},
//     {userId:"user2",userName:"yashika"},

// ]
// console.log(users[1].userName)
// for(let user of users){
//     console.log(user.userName);
// }

// nested destructuring 
// const[{userName:Name,userId},{userId:Id}]=users
// console.log(Name,userId)
// console.log(Id);


// computed properties
// const value1=1;
// const value2=2;
// const key1="keyfirst"
// const key2="keysecond"
// const obj={
//     [key1]:value1,
//     [key2]:value2
// };
// // obj[key1]=value1
// // obj[key2]=value2

// console.log(obj);

//  spread operator


// const obj1={
//     firstName:"anjali",
//     age:19
// };
// const obj2={
//     firstName:"holy crap",
//     place:"chandigarh",
//     houseno:19
// };

// const newObj={...obj1,...obj2,car:"maruti"}
// const newObj={...obj2,...obj1,car:"maruti"}
// const newObj={...1234}

// const obj=[...obj2];
// console.log(obj)

// console.log(newObj)


















