var Parent = (function(){
    function Parent(name){
        this.name = name;
    }

    Parent.prototype.getName = function(name){
        this.name = name;
    }
    
    Parent.prototype.setName = function(){
        return this.name;
    }
    
    Parent.prototype.sayHi = function(){
        console.log("HI! " + this.name)
    }

    return Parent;
}());

let printParent = new Parent("print My Name");
console.log(printParent);

// Parent -> objectParent
var objectParent = Object.create(Parent.prototype);

objectParent.name = "Print your Name"
objectParent.sayHi();

console.log(objectParent);
console.log(objectParent instanceof Parent);

console.log("");
console.log("--------------------");
console.log("");

var Child = (function(){
    function Child(name){
        this.name = name;
    }

    // Parent -> Child
    Child.prototype = Object.create(Parent.prototype);
    
    Child.prototype.sayHi = function(){
        console.log("Hello!" + this.name);
    }

    return Child;
}());

let printChild = new Child("Print my child name");
console.log(printChild);

// Parent -> Child -> objectChild
var objectChild = Object.create(Child.prototype);

objectChild.name = " My Child";
objectChild.sayHi();

console.log(objectChild);

// Like between Man and his parents.
console.log(objectChild instanceof Child);

// Like between Man and his grandparents.
console.log(objectChild instanceof Parent);
