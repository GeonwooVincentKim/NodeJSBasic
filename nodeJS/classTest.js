// Determine that the instance of the class has only one Object
var humanClass = function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log("Name : " + this.name);
    };
}

var person1 = new humanClass('Lee', 'Male');
var person2 = new humanClass('kim', 'female');

console.log("Person1 : ", typeof person1);
console.log("Person2 : ", typeof person2);
console.log("Person1 : ", person1);
console.log("Person2 : ", person2);

console.log("Person1 name : " + person1.name + " - gender : " + person1.gender);
console.log("Person2 name : " + person2.name + " - gender : " + person2.gender);
