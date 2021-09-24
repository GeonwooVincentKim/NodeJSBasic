console.log("Call By Value");
console.log("Single Parameter");

function foo(primitive) {
    primitive += 1;
    return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0

console.log("---------------");
console.log("Multiple Parameter");

var getSumValue = function(first, second){
    sum = first + second;
    return sum;
}

var x = 10, y = 10;

console.log(getSumValue(x, y));
console.log(x, y);

console.log();
console.log("---------------");
console.log("===============");
console.log("---------------");
console.log();
console.log("Call By Reference");

var changeVal = function(primitive, obj){
    primitive += 100;
    obj.name = "Kim";
    obj.gender = "Female";
}

/* 
    num -> Call By Value
    obj -> Call By Reference 
*/
var num = 100;
var obj = {
    name: "Lee",
    gender: "Male"
};

console.log(num);
console.log(obj);

changeVal(num, obj);

console.log(num);
console.log(obj);
