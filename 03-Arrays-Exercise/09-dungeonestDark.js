function dungeonestDark(arr) {

    let health = 100;
    let coins = 0;
    let rooms = arr.toString().split('|');
    let bestRoom = 1;
    for (let room of rooms) {
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);

        if (command === 'potion') {
            if (health + num <= 100) {
                health += num;
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                let temp = 100 - health;
                health += temp;
                console.log(`You healed for ${temp} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command === 'chest') {
            console.log(`You found ${num} coins.`);
            coins += num;
        } else {
            let monsterName = command;
            let monsterAttack = num;
            health -= monsterAttack;
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }
    if(health>0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])