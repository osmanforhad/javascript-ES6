//Simple array
var myArray = ['a', 'b', 'c', 'd', 'e'];
console.log(myArray[1]);
//array declaration using array constructor
var myArrayPro = new Array('a', 'b', 'c', 'd', 'e');
console.log(myArrayPro[3]);

//using for of loop to get all of array element
for (let item of myArrayPro) {
    console.log(item);
}