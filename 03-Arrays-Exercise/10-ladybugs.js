function ladybugs(array) {

    let fieldSize = array.shift();
    let ladybugsPositions = array.shift().split(' ').map(Number);
    //create field with ladybugs
    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugsPositions.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    let commands = array.slice();

    for (let command of commands) {
        let tokens = command.split(' ');
        let ladybugIndex = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);


        if (!field[ladybugIndex]) {
            continue;
        }

        field[ladybugIndex] = 0;

        if (direction === 'left') {
            let newIdx = ladybugIndex - flyLength;
            
            if (newIdx >= 0) {
                while (field[newIdx] === 1) {
                    newIdx -= flyLength;
                }
                if (newIdx >= 0) {
                    field[newIdx] = 1;
                }
            }
        } else {
            let newIdx = ladybugIndex + flyLength;
           
            if (newIdx < field.length) {
                while (field[newIdx] === 1) {
                    newIdx += flyLength;
                }
                if (newIdx < field.length) {
                    field[newIdx] = 1;
                }
            }
        }

    }

    console.log(field.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])