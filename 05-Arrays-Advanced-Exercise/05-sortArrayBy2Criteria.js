function sortArrayBy2Criteria(arr) {
    let sortedArr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
console.log(sortedArr.join('\n'));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma'])