function processOddNumbers(arr) {
    // let oddArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     let curr =0;

    //     if (i % 2 === 1) {
    //         curr = arr[i];
    //         curr *= 2;
    //     }
    //     else{
    //         continue;
    //     }
    //     oddArr.push(curr);

    // }
    // console.log(oddArr.reverse().join(' '));

//vers2
let result=arr.filter((num,i)=>i%2===1).map(num =>2*num).reverse();
console.log(`Original array = [${arr}]`);
console.log(`Nums on odd position, doubled and in reverse order: ${result.join(' ')}`);

}

processOddNumbers([10, 15, 20, 25])