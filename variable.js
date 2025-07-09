// var, let, const
/**
 * if we declare any variable with VAR keyword then we can again redeclare and reassaign this variable any where of the program
 */
var name = "osman";
name = "forhad" //reAssaign (it's possibale by using var keyword)
console.log(name);//forhad

var namess = "osman gani";
var namess = "osman gani forhad";//reDeclare (it's possibale by using var keyword)
console.log(namess);//osman gani forhad

/**
 * if we declare any variable with LET keyword then we can only reassaign this variable within this block cannot be redeclare
 */
let names = "osman";
names = "forhad" //reAssaign (it's possibale by using let keyword)
console.log(name);//forhad

let namess = "osman gani";
let namess = "osman gani forhad";//reDeclare (we can't do it by using let keword)
console.log(namess);//error wil display
/**
 * if we declare any variable with CONST keyword then we can cannot redeclare or resign any where, it is block scoped
 */
const named = "osman";
named = "forhad" //reAssaign (we can't do it by using const keword)
console.log(name);//error wil display

const namess = "osman gani";
const namess = "osman gani forhad";//reDeclare (we can't do it by using const keword)
console.log(namess);//error wil display