// arrays is a reference type it means it is an object 

// let myNewArray=["allu","pillu",45,null,undefined];
// console.log(myNewArray);
// console.log(typeof myNewArray);

// console.log(Array.isArray(myNewArray));

// they are mutable.

// myNewArray[1]="anjali";
// console.log(myNewArray);

// push pop shift unshift

// myNewArray.push("holla");
// console.log(myNewArray);
// let poppedEle=myNewArray.pop(); //if we give any argument nothing will change
// console.log(myNewArray);
// console.log(poppedEle);

// let myNewArray=["allu","pillu",45,null,undefined];

// myNewArray.unshift("firstone");
// console.log(myNewArray);

// myNewArray.shift();
// myNewArray.shift();
// console.log(myNewArray)

// myNewArray.pop();
// myNewArray.pop();
// console.log(myNewArray)

// while loop
// let myNewArray=["raddish","onion","brinjal","potato"];
// let newOne=[];
// let i=0;
// while(i<myNewArray.length){
//     newOne.push(myNewArray[i]);
//     i++;
// }
// console.log(newOne);

// primitives vs reference types
// let var1=4;
// let var2=var1;
// console.log(var1)
// console.log(var2)
// var1++;
// console.log(var1);
// console.log(var2);

// reference tpes

// let obj1=[1,2];
// let obj2=obj1;
// obj1.push(3);
// console.log(obj1);
// console.log(obj2);


// forof loop
// let cartoons=["pikachu","doremon","shinchan"];
// for(let cartoon of cartoons){
//     console.log(cartoon);
// }


// forin loop
// let cartoons=["pikachu","doremon","shinchan"];
// for(let i in cartoons){
//     console.log(cartoons[i]);
// }


// array cloning 
// let arr1=["pikachu","shinchan","doremon"];
// let arr2=arr1;
// console.log(arr1===arr2);

// 1.easy
// let arr1=["pikachu","shinchan","doremon"];
// let arr2=["pikachu","shinchan","doremon"];
// console.log(arr1===arr2);

// 2.slice
// let arr2=arr1.slice(0);
// console.log(arr2)

// 3. concat
// let arr2=[].concat(arr1);
// console.log(arr2);

// 4. spread operator
// let arr2=[...arr1];
// console.log(arr2);




// making new array by combining previous array with some new elements
// let arr1=["pikachu","shinchan","doremon"];
// 1.
// let newArray=[].concat(arr1,['ninja hatorri','dragon boll z'])
// console.log(newArray)

// 2.
// let newArray=[...arr1,'ninja hatorri','dragon boll z']
// console.log(newArray)

// 3.
// let newOne=['ninja hatorri','dragon boll z']
// let newArray=[...arr1,...newOne];
// console.log(newArray)

// 4.
// let newArray=[...arr1].concat(['ninja hatorri','dragon boll z'])
// console.log(newArray)



// for loop
// let myNewArray=["raddish","onion","brinjal","potato"];
// let newOne=[];
// for(let i=0;i<myNewArray.length;i++){
//     newOne.push(myNewArray[i].toUpperCase());
//     console.log(myNewArray[i].toUpperCase());
// }
// console.log(myNewArray)
// console.log(newOne)
// console.log(myNewArray.length)



// use const while making arrays 
// const arr1=["pikachu","shinchan","doremon"];
// arr1.push("krish");
// console.log(arr1);
// arr1=["krish"];
// console.log(arr1);  //error

// Array destructuring

// let arr1=["pikachu","shinchan","doremon"];
// let var1=arr1[0];
// let var2=arr1[1];
// let var3=arr1[2];
// console.log(var1,var2,var3);



// destructuring shortcut
// const[var1,var2,var3]=arr1;
// console.log(var1,var2,var3);


// case
let arr1=["pikachu","shinchan","doremon"];
const[var1,...var3]=arr1;
console.log(var1,var3);






















