function equalArrays(arr1, arr2) {
    let a1 = arr1.map(Number);
    let a2 = arr2.map(Number);

    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        for (let elem of a1) {
            sum += elem;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}


equalArrays(['10', '20', '30'], ['10', '20', '30']);