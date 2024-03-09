function printAndSum(start, end) {
    let sum = 0;
    let temp = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        temp += i + ' ';
    }
    console.log(temp);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
