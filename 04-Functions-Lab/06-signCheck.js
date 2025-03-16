function signCheck(numOne, numTwo, numThree) {
    // let multiplication = numOne * numTwo * numThree;
    // if (multiplication > 0) {
    //     return "Positive"
    // } else {
    //     return "Negative"
    // }

    //second solution
    let negativeNumbers = 0;
    if(numOne<0){
        negativeNumbers++;
    }
    if(numTwo<0){
        negativeNumbers++;
    }
    if(numThree<0){
        negativeNumbers++;
    }
    if (negativeNumbers %2 === 0 ){
        return "Positive"
    }else {
        return "Negative"
    }

 // third solution
//  let multiplyOne = (x,y) => x*y;
//  let result = multiplyOne(numOne, numTwo) * numThree;

//  if (result >0 ){
//         return "Positive"
//     } else {
//         return "Negative"
//     }

}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
