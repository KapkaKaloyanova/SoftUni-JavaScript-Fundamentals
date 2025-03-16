function simpleCalculator(numOne, numTwo, operator) {
    // let result = 0;
    // switch (operator) {
    //     case 'multiply':
    //         result = numOne * numTwo;
    //         break;
    //     case 'divide':
    //         if(numTwo != 0){
    //             result = numOne / numTwo;
    //         }else{
    //             console.log("Can't divide to zero");
    //         }
    //         break;
    //     case 'add':
    //         result = numOne + numTwo;
    //         break;
    //     case 'subtract':
    //         result = numOne - numTwo;
    //         break;
    // }
    let calculate = (x, y, z) => {
        return z === 'multiply' ? numOne * numTwo :
            z === 'divide' ? numOne / numTwo :
                z === 'add' ? numOne + numTwo :
                    z === 'subtract' ? numOne - numTwo :
                    ('invalid');
};
    console.log(calculate(numOne,numTwo,operator));
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')