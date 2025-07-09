//(for in loop) used for looping inside object
var billGates = {
    shirt: true,
    shirtColor: 'white',
    isSmiling: true,
    swatter: true,
    swatterColor: 'gray',
    chosma: true,
};
for (let props in billGates) {
    //console.log(props);
    console.log(props + ":" + billGates[props]);
    //console.log(billGates[props]);
}