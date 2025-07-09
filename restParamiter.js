//rest paramiter (a,b,...number)
function calculation(a, b, ...Number) {
    let sum = 0;
    //for of loop for calculation
    for (let i of Number) {
        sum = sum + i;
    }
    console.log(sum);
}

//method calling
calculation(10, 20, 1, 2, 3, 4, 5, 6, 7);