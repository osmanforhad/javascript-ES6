//objecet

//simple object
var billGates = {
    shirt: true,
    shirtColor: 'white',
    isSmiling: true,
    swatter: true,
    swatterColor: 'gray',
    chosma: true,
};
//asseccing object property
console.log(billGates['shirtColor'], billGates['chosma']);
//console.log(billGates['shirtColor']);


//Nested object
var billGatesPro = {
    shirt: {
        color: "off white",
        Quality: 'good',
        price: "200 USD",
    },

    swatter: {
        color: "gray",
        Quality: 'good',
        price: "230 USD",
        warm: 'best'
    },
    face: {
        smiling: {
            tooMuch: 'yes',
            happy: true,
        },
        chosma: 'Yes',
        teeth: 'white, big'
    }
};
//asseccing Nested object property
console.log(billGatesPro['swatter']['price']);
//console.log(billGatesPro['swatter']['price', 'color']);
console.log(billGatesPro['face']['smiling']['happy']);
