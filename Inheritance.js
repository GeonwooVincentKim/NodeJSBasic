// Parent Constructor function
var Parent = (function(){
    // Constructor
    function Parent(name){
        this.name = name;
    }

    Parent.prototype.sayHi = function(){
        console.log("Hi! ", this.name)
    };

    return Parent;
}());

var makeParentSimpleInstance = new Parent("Very Simple");
makeParentSimpleInstance.sayHi();
console.log(makeParentSimpleInstance);

console.log("")

let displayParentSimpleInstance = new Parent("Static Name");
displayParentSimpleInstance.sayHi();
console.log(displayParentSimpleInstance);

console.log("\n")

// Child Constructor function
var Child = (function(){
    // Constructor
    function Child(name){
        this.name = name;
    }

    Child.prototype = new Parent();

    return Child;
}());

var makeChildSimpleInstance = new Child("Grec");
makeChildSimpleInstance.sayHi();
console.log(makeChildSimpleInstance);
