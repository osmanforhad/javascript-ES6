//Anonymouse function, if we declare any function without its name then its a anonymouse function and we can reassign this type of function
var myFunction = function (country) {
    return country;
}
//calling anonymouse fucntion through its variable
const result = myFunction("Bangladesh");
console.log(result);

//another example of anonymouse function
var osman = function () {
    return "js developer";
}
//calling anonymouse fucntion through its variable
const output1 = osman();
console.log(output1);

//reAssign Anonymouse
var osman = function () {
    return "fullstack developer";
}
//calling anonymouse fucntion through its variable
const output2 = osman();
console.log(output2);