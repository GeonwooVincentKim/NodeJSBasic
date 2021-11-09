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

    // Override Method
    Child.prototype.sayHi = function(){
        console.log("안녕하세요! " + this.name);
    };

    // Created new method in Child Class
    Child.prototype.sayBye = function(){
        console.log("안녕히 가세요~ " + this.name);
    };

    return Child;
}());

var makeChildSimpleInstance = new Child("Grec");
makeChildSimpleInstance.sayHi();
console.log(makeChildSimpleInstance);

console.log();

let displayChildSimpleInstance = new Child("VS Code");
displayChildSimpleInstance.sayHi();
console.log(displayChildSimpleInstance);

console.log();

var child = new Child("Child");
console.log(child);

console.log(Child.prototype);

child.sayHi();
child.sayBye();

console.log(child instanceof Parent);
console.log(child instanceof Child);
