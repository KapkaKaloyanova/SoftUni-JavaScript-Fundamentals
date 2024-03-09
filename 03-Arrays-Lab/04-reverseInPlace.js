function reverseInPlace(arr) {
//version 1
    // for(let i=0; i<arr.length/2; i++){
    //     let oldElement = arr[i];
    //     let previousIndex = arr.length-1-i;
    //     arr[i]=arr[previousIndex];
    //     arr[previousIndex]=oldElement;
    // }
    // console.log(arr.join(' '));

//version 2
    console.log(arr.reverse().join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])