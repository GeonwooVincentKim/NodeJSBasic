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
