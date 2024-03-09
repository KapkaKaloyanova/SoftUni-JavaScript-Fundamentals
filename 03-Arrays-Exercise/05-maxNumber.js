function maxNumber(arr) {
    //top element is an integer, which is bigger than all the elements to its right
    let topNum = [];
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (curNum <= rightNum) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topNum.push(curNum);
        }
    }
    console.log(topNum.join(' '));
}
maxNumber([1, 4, 3, 2]);
