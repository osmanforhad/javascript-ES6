//variable scope
var profession = "Software Developer";//Global Scope (variable), this varibale we can use from any where
function myFunction() {
    var name = "osman forhad"; //local scope (variable), this varibale we can use only inside this function
    console.log(name);//osman forhad

    console.log(profession);//Software Developer
}
console.log(name);//error wil display
console.log(profession);//Software Developer