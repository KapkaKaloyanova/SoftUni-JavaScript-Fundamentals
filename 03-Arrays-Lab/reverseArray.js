function reverse(n, inputArr) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }
    let output = '';
    for (let index = arr.length - 1; index >= 0; index--) {
        output += `${arr[index]} `;
    }
    console.log(output);
}
reverse(3,[10,20,30,40]);
