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

    return Parent;
}());

let printParent = new Parent("print My Name");
console.log(printParent);

var objectParent = Object.create(Parent.prototype);
objectParent.name = "Print your Name"
console.log(objectParent);
