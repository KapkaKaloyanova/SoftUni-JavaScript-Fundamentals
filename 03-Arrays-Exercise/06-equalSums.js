function equalSums(arr) {

    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];

        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
        }

    }
    if (isEqual === false) {
        console.log('no');
    }
}

//version Ivailo
// function equalSums(arr) {
//     let leftSum = 0;
//     let rightSum = 0;
//     let isEqual = false;

//     for (let currIndex = 0; currIndex < arr.length; currIndex++) {
//         for (let i = 0; i < arr.length; i++) {

//             if (i !== currIndex) {
//                 let num = Number(arr[i]);
//                 if (i < currIndex) {
//                     leftSum += num;
//                 } else if (i > currIndex) {
//                     rightSum += num;
//                 }
//             }
//             if (currIndex === 0) {
//                 leftSum = 0;
//             } else if (currIndex === arr.length - 1) {
//                 rightSum = 0;
//             }
//         }
//         if (leftSum === rightSum) {
//             console.log(currIndex);
//             isEqual = true;
//         } else {
//             leftSum = 0;
//             rightSum = 0;
//         }
//     }
//     if (!isEqual) {
//         console.log('no');
//     }
// }

//version 3
// function equalSums(arr) {
//     let isEqual = false;
//     for (let i = 0; i < arr.length; i++) {
//         let leftSum = 0;
//         let rightSum = 0;

//         // Calculate the sum of elements to the left of current index
//         for (let j = 0; j < i; j++) {
//             if (i === 0) {
//                 leftSum = 0;
//             } else {
//                 leftSum += arr[j];
//             }
//         }

//         // Calculate the sum of elements to the right of current index
//         for (let k = i + 1; k < arr.length; k++) {
//             if (i === arr.length) {
//                 rightSum = 0;
//             } else {
//                 rightSum += arr[k];
//             }
//         }

//         // Check if sums are equal
//         if (leftSum === rightSum) {
//             console.log(i);
//             isEqual = true;
//         }

//     }
//     if (isEqual === false) {
//         console.log("no");
//     }
// }

equalSums([1, 2, 3, 3]);
