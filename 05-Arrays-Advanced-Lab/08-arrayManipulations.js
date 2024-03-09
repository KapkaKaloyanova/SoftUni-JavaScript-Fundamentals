function arrayManipulations(arr) {
    let numbers = arr
        .shift()
        .split(' ')
        .map(Number);

    for (let row of arr) {
        // let currentRow=row.split(' ');
        // let command = currentRow[0];
        // let firstNum = currentRow[1];
        // let secondNum = currentRow[2];
        // these rows are equal to the row below
        let [command, firstNum, secondNum] = row.split(' ');

        switch (command) {
            case 'Add':
                numbers.push(Number(firstNum));
                break;

            case 'Remove':
                numbers = numbers.filter(n => n !== Number(firstNum));
                break;

            case 'RemoveAt':
                numbers.splice(Number(firstNum), 1);
                break;

            case 'Insert':
                numbers.splice(Number(secondNum), 0, Number(firstNum));
                break;
        }
    }
 console.log(numbers.join(' '));

}


arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])