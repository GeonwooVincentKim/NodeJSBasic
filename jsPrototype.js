function Person(name){
    this.name = name;
}

Person.prototype.setName = function(name){
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
};

var me = new Person("Lee");
var you = new Person("Kim");
var him = new Person("Choi");

console.log(Person.prototype);

// Cannot see the prototype type when it already created as an object of Person
console.log(new Person("Get").prototype);
console.log(new Person("Take"));

console.log(me);
console.log(you);
console.log(him);