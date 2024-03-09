function arrManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();
        if (action === 'add') {
            let idx = Number(tokens.shift());
            let item = Number(tokens.shift());

            nums.splice(idx, 0, item);

        } else if (action === 'addMany') {
            let idx = Number(tokens.shift());
            for (let item of tokens) {
                item=Number(item);
                nums.splice(idx, 0, item);
                idx++;
            }

        } else if (action === 'contains') {
            let item = Number(tokens.shift());
            let idx = nums.indexOf(item);
            console.log(idx);

        } else if (action === 'remove') {
            let idx = Number(tokens.shift());
            nums.splice(idx, 1);

        } else if (action === 'shift') {
            let rotations = Number(tokens.shift());

            for (let curRotation = 1; curRotation <= rotations; curRotation++) {
                let firstItem = nums.shift();
                nums.push(firstItem);
            }

        } else if (action === 'sumPairs') {
            let pairedNums = [];

            for (let i = 0; i < nums.length; i += 2) {
                if (i + 1 < nums.length) {
                    pairedNums.push(nums[i] + nums[i + 1]);
                } else {
                    pairedNums.push(nums[i]);
                }
            }
            nums = pairedNums;

        } else if (action === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);

        }
    }
}
arrManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])

arrManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])