function userInfo(name, age){
    this.name = name,
    this.age = age
}

function printUser(){
    console.log(new userInfo("Vincent", 30));
    console.log(new userInfo("Kyle", 25));
    console.log(new userInfo("Rachel", 50));

    var specialUser = function(){
        console.log(new userInfo("Ralph", 28));
        console.log(new userInfo("Bricks", 26));
    };
    // specialUser();
    return specialUser;
}

var inner = printUser();
inner();
// printUser();
