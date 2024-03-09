function sorting(arr) {
    let ascendingArr = arr.sort((a,b)=>a-b);
    let sortedArr=[];

    while (ascendingArr.length>0){
        let biggest = ascendingArr.pop();
        sortedArr.push(biggest);

        let smallest = ascendingArr.shift();
        sortedArr.push(smallest);

    }
    console.log(sortedArr.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])