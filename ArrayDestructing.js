var arr = [1, 2, 3];

/* Data by Array Index */
var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three + " -> Variable Version");

/* Data by Entire Array */
const [const_one, const_two, const_three] = arr;

console.log(const_one, const_two, const_three + " -> Const");

var obj = {firstName: "Ungmo", lastName: "Lee"};

var firstName = obj.firstName;
var lastName = obj.lastName;

console.log(firstName, lastName);
