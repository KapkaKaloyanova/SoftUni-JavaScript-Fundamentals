function bitcoinMining(arr) {
    let day = 0;
    let gold = 0;
    let bitcoins = 0;
    let money = 0;
    let firstDay = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    for (let i = 0; i < arr.length; i++) {
        gold = arr[i];
        day++;
        if (day % 3 === 0) {
            gold *= 0.7;
        }
        money += gold * goldPrice;

        while (money >= bitcoinPrice) {
            bitcoins++;
            money -= bitcoinPrice;
            if (bitcoins === 1) {
                firstDay = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if(firstDay >0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
// bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);

