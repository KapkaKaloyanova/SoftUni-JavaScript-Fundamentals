function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    let first = arr.slice(0, k);
    // let last = arr.slice(k*-1);
    let last = arr.slice(arr.length - k, arr.length); // better 

    console.log(first.join(' '));
    console.log(last.join(' '));
}
firstAndLastKNumbers([2,
    7, 8, 9])

//You are given an array of numbers
// ▪ The first element holds an integer k
// ▪ All other elements are from the array that needs to be processed
// ▪ Print the first k and the last k elements of the array on a new line (space separated)