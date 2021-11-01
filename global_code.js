// To execute this project
// Press, `Ctrl + Alt + n`

var x = 'xxx';
console.log(x);

function foo(){
    var y = 'yyy';
    console.log(y);

    function bar(){
        var z = 'zzz';
        console.log(z);
        console.log("-------------------");
        console.log(x + y + z);
    }
    bar();
}

foo();
