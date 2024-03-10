function calculator(num1, operator, numb2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + numb2;
            break;
        case '-':
            result = num1 - numb2;
            break;
        case '/':
            result = num1 / numb2;
            break;
        case '*':
            result = num1 * numb2;
            break;
    }
    console.log(`${result.toFixed(2)}`)
}
calculator(5, '+', 10)