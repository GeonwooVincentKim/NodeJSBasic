function outerFunc(){
    var x = 10;
    console.log(x + " -> OuterFunc");

    function innerFunc(x){
        console.log(x + " -> InnerFunc");
    }
    innerFunc(x);
}

outerFunc();
