/*
    Difference between Kotlin's `var` and NodeJS's `var`
    I. NodeJS
        1. var
            - 1. Can re-declare the variable
            - 2. Can change the variable values
        
        2. let
            - 1. Cannot re-declare the variable
            - 2. Can change the variable values
        
        3. const
            - 1. Cannot re-declare the variable
            - 2. Cannot change the variable values

    II. Kotlin
        1. var
            - 1. Cannot re-declare the variable
            - 2. Can change the variable values
        
        2. val (Static in Java)
            - 1. Cannot re-declare the variable
            - 2. Cannot update or change values when the variable has already initialized

        3. const val
            - 1. Cannot re-declare the variable
            - 2. Cannot update or change values
            - 3. Can initialized the value type as `Primitive Types`, such as `Integer`, `Double`, `Long`, `Character`, `Float`
*/
console.log(foo);

var foo = 123;
console.log(foo);

{
    var foo = 456;
}

console.log(foo);


/*
    Difference between `&&` and `||`
*/
let a = 'Cat' && 'Dog'
console.log(a);

a = 'Cat' || 'Dog'
console.log(a);
