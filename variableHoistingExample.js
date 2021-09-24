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
        
        22. val
            - 1. Cannot re-declare the variable
            - 2. C
    
*/
console.log(foo);

var foo = 123;
console.log(foo);

{
    var foo = 456;
}

console.log(foo);
