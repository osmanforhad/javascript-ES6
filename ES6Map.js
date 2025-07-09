//Map, is Colletion of data, where have (key value pair) a seperate key for every data and every key has to be a value 

//create object instance for map class
var myMap = new Map();
//setting value inside map with a key value pair system
myMap.set('key1', "Bangladesh");
myMap.set('key2', "India");
myMap.set('key3', "Maldibs");
myMap.set('key4', "Pakisthan");
myMap.set('key5', "Nepal");
myMap.set('key6', "Vuthan");
myMap.set('key7', "Tiland");

//extracting key from map
console.log(myMap.keys());
//extracting value from map
console.log(myMap.values());

//delete specific value from an array by key
myMap.delete("key3");

//looping for extract value from an array
for (let myValue of myMap.values()) {
    console.log(myValue);
}


//looping for extract key from an array
for (let myKey of myMap.keys()) {
    console.log(myKey);
}

//get specific value from an array by key
var result = myMap.get("key6");
console.log(result);

//check specific value from an array by key
if (myMap.has("key3")) {
    console.log("Yes");
}
else {
    console.log("No");
}