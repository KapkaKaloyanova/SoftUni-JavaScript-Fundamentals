function reverse(arr) {
        for (let i=0; i<arr.length/2; i++){
        let oldElement = arr[i];
        let prevIndex= arr.length-1-i;
        arr[i]=arr[prevIndex];
        arr[prevIndex]=oldElement;
    }
    console.log(arr.join(' '));
}
reverse(['a','b','c','d','e','f']);
