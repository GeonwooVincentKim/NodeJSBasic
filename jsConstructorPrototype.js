/* Every constructor function prototype are `Function.prototype` */
Function.prototype.method = function (name, func){
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
};

function Person(name){
    this.name = name;
}

var newPersonInstance = new Person("Your Name");
console.log(newPersonInstance);

Person.method('setName', function(name){
    this.name = name;
});

Person.method("getName", function(){
    return this.name;
});

// Similar with Kotlin `val`
let newPersonPrototypeInstance = new Person("Your Name??");
console.log(newPersonPrototypeInstance);

var me = new Person("Lee");
var you = new Person("Kim");
var him = new Person("Choi");

console.log(Person.prototype);

console.log(me);
console.log(you);
console.log(him);