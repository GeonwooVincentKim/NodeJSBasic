function linearSearch(array, target){
    const length = array.length;

    for(let i = 0; i < length; i++){
        if(array[i] == target) return i;
    }

    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch.length);

console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));

new_list = [1, 2, 3, 4, 5, 6]
for(let i = 0; i < new_list.length; i++){
    let printValue = linearSearch(new_list, 2);

    if(new_list[i] == printValue){
        console.log("Founded -> " + printValue);
    }
}