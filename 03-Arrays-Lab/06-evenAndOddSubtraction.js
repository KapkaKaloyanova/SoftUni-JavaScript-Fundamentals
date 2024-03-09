function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let elem of arr) {
        if (elem % 2 === 0) {
            evenSum += elem;
        } else {
            oddSum += elem;
        }
    }
    let diffEvenOdd = evenSum - oddSum;
    console.log(diffEvenOdd);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
