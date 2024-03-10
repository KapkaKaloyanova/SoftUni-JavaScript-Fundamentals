// • Every second lost game, his helmet is broken.
// • Every third lost game, his sword is broken.
// • When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// • Every second time, when his shield brakes, his armor also needs to be repaired. 
function gladiatorExpenses(lostFights, helmet, sword, shield, armor) {
    let expenses = 0;
    let shieldCount = 0;
    let helmetCount = 0;
    let swordCount = 0;
    let armorCount = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetCount++;
        }
        if (i % 3 === 0) {
            swordCount++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCount++;
        }
    }
    armorCount = Math.floor(shieldCount / 2);
    expenses = helmetCount * helmet + swordCount * sword + shieldCount * shield + armorCount * armor;
    // console.log(`helmet - ${helmetCount}`);
    // console.log(`sword - ${swordCount}`);
    // console.log(`shield - ${shieldCount}`);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)