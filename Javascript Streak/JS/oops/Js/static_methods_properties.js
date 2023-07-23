// static methods and properties can only accessed ythrough the class not object 

class Animal{
    static variable=22;
    static func(){
        console.log("hi");
    };
}
const deer=new Animal();

// Animal.func()
console.log(Animal.variable);