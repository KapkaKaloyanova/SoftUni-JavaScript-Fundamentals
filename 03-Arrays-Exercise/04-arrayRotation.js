function arrayRotation(arr, rotations) {
    for (let curRotation=1; curRotation<=rotations; curRotation++){
        let firstElem = arr.shift();
        arr.push(firstElem);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
