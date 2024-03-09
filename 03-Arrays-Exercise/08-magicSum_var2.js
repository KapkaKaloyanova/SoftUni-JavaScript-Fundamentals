function magicSumVar2(arr, magicNum) {
    let duplicateArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i!==0){
            let prevNum = Number(arr[i-1]);

            for (let j = i; j < arr.length; j++) {
                let curNum= Number(arr[j])
                if ((prevNum + curNum) === Number(magicNum) &&  !duplicateArray.includes(prevNum) && !duplicateArray.includes(curNum)) {
                    console.log(`${prevNum} ${curNum}`);
                    duplicateArray.push(prevNum, curNum);
                }
            }
        }
    }
}

magicSumVar2([1, 7, 6, 2, 19, 23], 8);
magicSumVar2([14, 20, 60, 13, 7, 19, 8], 27);
magicSumVar2([1, 2, 3, 4, 5, 6], 6);