function addAndSubtract(arr) {
    let sumOriginal=0;
    let sumChanged=0;

    for(let i=0; i<arr.length; i++){
        sumOriginal+=arr[i];

        if(arr[i]%2===0){
            arr[i]+=i;
        }else {
            arr[i]-=i;
        }
        sumChanged+=arr[i];

    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumChanged);
}
addAndSubtract([5, 15, 23, 56, 35]);
