// function maxSequenceOfEqualElements(arr) {
//     let maxArr = [];
//     let sequence = 1;
//     let maxSequence = 0;
//     let maxStartIndex = 0;
//     let curElemIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             sequence++;
//         } else {
//             if (maxSequence < sequence) {
//                 maxSequence = sequence;
//                 maxStartIndex = curElemIndex;
//             }
//             sequence = 1;
//             curElemIndex = i;
//         }
//     }
//     if (maxSequence < sequence) {
//         maxSequence = sequence;
//         maxStartIndex = curElemIndex;
//     }
//     maxArr = arr.slice(maxStartIndex, maxStartIndex + maxSequence);

//     console.log(maxArr.join(' '));
// }

//best and easiest solution Thank you Ivailo
function maxSequenceOfEqualElements(arr) {
    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (i !== 0) {
            let curNum = Number(arr[i]);
            let prevNum = Number(arr[i - 1]);

            if (curNum === prevNum) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = curNum;
                }
            } else {
                sequence = 1;
            }
        }
    }

    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
