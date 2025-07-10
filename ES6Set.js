//set method, this method cant not count duplicate value

//create object instance
var mySet = new Set();

mySet.add("Bangladesh");
mySet.add("India");
mySet.add("China");
mySet.add("Nepal");
mySet.add("Bhutan");
mySet.add("Maldibs");
mySet.add("Srylanka");
mySet.add("Bangladesh");
mySet.add("Bangladesh");

//delete specific value
mySet.delete("India");

console.log(mySet);

//extract set size
mySet.size();

//checking an specific value
if (mySet.has("Nepal")) {
    console.log("Yes");
}
else {
    console.log("No");
}

//another example
var anotherSet = new Set(['A', 'A', 'B', 'C', 'D']);
console.log(anotherSet);

//remove all this set element
anotherSet.clear();