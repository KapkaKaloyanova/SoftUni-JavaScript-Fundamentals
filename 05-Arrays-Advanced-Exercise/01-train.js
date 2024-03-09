function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    // console.log(arr);
    for (let commands of arr) {
        let tokens = commands.split(' ');
        // console.log(tokens);
        if (tokens.includes('Add')) {
            let passengers = tokens.slice(1);
            wagons.push(passengers);
        } else {
            let passengers = Number(tokens.shift());
            // console.log(passengers);
            for (let idx = 0; idx < wagons.length; idx++) { //for(let idx in wagons){}
                if (wagons[idx] + passengers <= maxCapacity) {
                    wagons[idx] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])