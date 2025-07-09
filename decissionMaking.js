//dicission making like if, else, else if
var billGates = {
    shirt: true,
    shirtColor: 'white',
    isSmiling: true,
    swatter: true,
    swatterColor: 'gray',
    chosma: true,
};
if (billGates['shirtColor'] == "red") {
    console.log("Shirt color is red");
}
else if (billGates['shirtColor'] == 'blue') {
    console.log("Shirt color is blue");
}
else {
    console.log("Shirt color not found inside out condition");
}