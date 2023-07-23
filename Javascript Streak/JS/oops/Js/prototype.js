// in javascript functions are not only functions they are objects as well 
// we can add properties in it 

function func(){
    console.log("i am an object as well")
}
// func()
// func.adding="my fav property"
// console.log(func.adding)
// console.log(func)


// functions also provides a very useful property in javascript 
// console.log(func.prototype)  //an empty object.
// only functions provies an empty free space {} called prototype.
// now we can add the other properties of this function in prototype 

// func.prototype.fname="anjali"
// func.prototype.age=34
console.log(func.prototype) 


