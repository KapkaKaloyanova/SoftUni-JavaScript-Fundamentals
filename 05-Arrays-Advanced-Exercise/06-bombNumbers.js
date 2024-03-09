function bombNumbers(arr, bombPwr) {

    let bombNum = bombPwr[0];
    let power = bombPwr[1];
    let sum = 0;

    while (arr.includes(bombNum)) {
        let bomb = arr.indexOf(bombNum);
        if (bomb > 0) {
            arr.splice(bomb - power, power * 2 + 1);
        } else {
            arr.splice(bomb, power+1);
        }
    }
    if (arr.length >= 0) {
        for (let el of arr) {
            sum += el;
        }
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])