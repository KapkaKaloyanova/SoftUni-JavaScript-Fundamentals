function mergeArrays(arr1, arr2) {

    let mergedArr = [];
  
    for (let i = 0; i < arr1.length; i++) {
        let num1Str = arr1[i];
        let num2Str = arr2[i];

        if (i % 2 === 0) {
            let curNum = Number(num1Str) + Number(num2Str);
            mergedArr.push(curNum);

        } else {
            let curNum = arr1[i] + arr2[i];
            mergedArr.push(curNum);

        }
        
    }
    console.log(mergedArr.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);

