// var Prefixer = function(prefix){
//     this.prefix = prefix;
// }
function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    // (A)
    return arr.map(function (x){
        return this.prefix + ' ' + x; // (B)
    });
}

var pref = new Prefixer("Hi");

console.log(pref);
console.log(pref.prefixArray(['Lee', 'Kim']));
