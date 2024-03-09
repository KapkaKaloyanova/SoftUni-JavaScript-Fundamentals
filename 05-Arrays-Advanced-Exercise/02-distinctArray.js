function distinctArray(arr) {
    let uniqueArr=[];

    for(let el of arr){

        if (!uniqueArr.includes(el)){
            uniqueArr.push(el);

        }
    }
    console.log(uniqueArr.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

//You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array. 
// Print the result elements separated by a single space.

// we will use the reverse logic if the new array 
// is missing the number we will add it, if not we will not add it. 