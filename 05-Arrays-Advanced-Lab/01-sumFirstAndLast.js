function sumFirstAndLast(arr) {
    // let firstEl = Number(arr[0]);
    // let lastEl= Number(arr[arr.length-1]);
    // let sum = firstEl+lastEl;
    // console.log(sum)
   
    //version2
    // let firstEl=arr.shift().map(Number);
    // let lastEl=arr.pop().map(Number);
    // console.log(`${firstEl+lastEl}`);

    //version3
    arr= arr.map(Number);
    console.log(arr[0]+arr.pop());

}
sumFirstAndLast(['20', '30', '40'])