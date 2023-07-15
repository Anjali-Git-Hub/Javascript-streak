// console.log("hi Evryone")

// For each loop

// let myArr=[5,2,3,4];
// function func(number){
//     // console.log(number*2,index)
//     console.log(number);
// }
// // // func(myArr[0],0);
// // // func(myArr[1],1)

// // for(let i=0;i<myArr.length;i++){
// //     func(myArr[i],i);
// // }
// myArr.forEach(func);



// 2. map method
// const myArr=[2,3,7,4];
// const newArr=myArr.map(number=>console.log(number*number));
// IT WILL ALWAYS RETURNS A NEW ARRAY.
// console.log(newArr);

// application
// const users=[
//     {fname:"anjali",age:7},
//     {fname:"yashika",age:17},
//     {fname:"yashu",age:12},

// ]
// const usersName=users.map(obj=>obj.fname);
// console.log(usersName)





// 3.FILTER METHOD 
// const myArr=[2,3,7,4];
// const even=myArr.filter(number=>number%2===0);
// console.log(even);

// 4.reduce method
// const myArr=[2,3,7,4];

// const total=myArr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
// console.log(total)


// application
// const myCart=[
//     {prodId:1,prodName:"laptop",price:1200},
//     {prodId:2,prodName:"mobile1",price:100},
//     {prodId:3,prodName:"mobile2",price:200},
    
// ]
// const total=myCart.reduce((accumulator,obj)=>accumulator+obj.price,0)
// console.log(total)


// sort 
// const myarr=[5,3,4,10001];
// const alphabet=["anjali","Yashika","Rajni","barky","justin"]
// myarr.sort(); 
// alphabet.sort();
//expected 3,4,5,10001
// console.log(alphabet)


//expected 3,4,5,10001
// const myarr=[5,3,4,10001];
// myarr.sort((a,b)=>b-a);
// console.log(myarr)


// application
// const myCart=[
//         {prodId:1,prodName:"laptop",price:1200},
//         {prodId:2,prodName:"mobile1",price:100},
//         {prodId:3,prodName:"mobile2",price:200},
        
//     ]

// // price top-down
// const dumycart=myCart.slice(0).sort((obj1,obj2)=>obj1.price-obj2.price)
// console.log(dumycart)

// find method 
// const array=["anjali",1,2,"yashika"];
// console.log(array.find(item1=>item1.length===7))

// application
// const myCart=[
//         {prodId:1,prodName:"laptop",price:1200},
//         {prodId:2,prodName:"mobile1",price:100},
//         {prodId:3,prodName:"mobile2",price:200},
        
//     ]

//    const answer= myCart.find(obj=>obj.prodId===2);
//    console.log(answer)


// 7. every method
// let is_even=[2,3,6,8];
// const res=is_even.every(arr=>arr%2===0);
// console.log(res)


// application
// const myCart=[
//         {prodId:1,prodName:"laptop",price:1200},
//         {prodId:2,prodName:"mobile1",price:100},
//         {prodId:3,prodName:"mobile2",price:200},
        
//     ]

//    console.log( myCart.every(obj=>obj.price>100));

// some method
// let anyEven=[3,5,7,8];
// console.log(anyEven.some(arr=>arr%2==0));


// application
// const myCart=[
//         {prodId:1,prodName:"laptop",price:1200},
//         {prodId:2,prodName:"mobile1",price:100},
//         {prodId:3,prodName:"mobile2",price:200},
        
//     ]
//    console.log(myCart.some(obj=>obj.price===100));


// fill method 
// const newArr=new Array(5).fill(1);
// console.log(newArr)

// const existingArr1=[2,3,5,6,7];
// existingArr1.fill(2,0,5);
// console.log(existingArr1)


// splice method
// start delete insert 
const existingArr=[2,3,5,6,7];
// existingArr.splice(3,0,"hello")
const deletedEle=existingArr.splice(3,1,"helo","helo")
// console.log(deletedEle)
console.log(existingArr)











