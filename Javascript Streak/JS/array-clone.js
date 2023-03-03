let array1=['mango','apple','banana','grapes']
// let array2=['mango','apple','banana','grapes']

// console.log(array1===array2)
// now they are clones

// let array2=array1.slice(0)
// console.log(array2)
// console.log(array1===array2)

// let array2=[].concat(array1)
// console.log(array2)
// console.log(array1===array2)

// new way:- spread operator
// let array2=[...array1]
// console.log(array2)
// console.log(array1===array2)
oneMoreArray=array1.slice(0).concat(array1,["item1","item2","item3"])
array2=[...array1,...oneMoreArray]
console.log(array2)