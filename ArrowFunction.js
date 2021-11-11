// var Prefixer = function(prefix){
//     this.prefix = prefix;
// }
function Prefixer(prefix){
    this.prefix = prefix;
    console.log(this.prefix + " -> Before create Instance of Prefixer");
}

Prefixer.prototype.prefixArray = function(arr){
    return arr.map(x => `${this.prefix} ${x}`)
}

var pref = new Prefixer("Hi");

console.log(pref);
console.log(pref.prefix + " -> Prefix");
console.log(pref.prefixArray(['Lee', 'Kim']));
