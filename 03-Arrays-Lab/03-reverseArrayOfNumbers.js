function reverseArrayOfNumbers(n, inputArr) {
// version 1 | classic basic method
    // let arr = [];
    // for (let i = 0; i < n; i++) {
    //     arr.push(inputArr[i]);
    // }
    // let output = '';
    // for (let idx = arr.length - 1; idx >= 0; idx--) {
    //     output += `${arr[idx]} `;
    // }
    // console.log(output);

//version 2 | .SLICE() + .REVERSE()
    // let newArr= inputArr.slice(0,n);
    //  let reversedArr = newArr.reverse();
    // console.log(reversedArr.join(' '));

//version 3 | FOR + .UNSHIFT()
    let newArr = [];
    for (let i = 0; i < n; i++) {
        let curNum = inputArr[i];
        newArr.unshift(curNum);
    }
    console.log(newArr.join(' '));

}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
