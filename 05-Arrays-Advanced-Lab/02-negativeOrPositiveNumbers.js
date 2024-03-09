function negativeOrPositiveNumbers(arr) {
    let newArr = [];
    arr = arr.map(Number);

    for (let currentEl of arr) {
        if (currentEl >= 0) {
            newArr.push(currentEl);
        } else {
            newArr.unshift(currentEl);
        }
    }

    console.log(newArr.join('\n'));

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])