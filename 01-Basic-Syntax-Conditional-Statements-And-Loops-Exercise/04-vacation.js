function vacation(groupCount, groupType, day) {
    let pricePerPerson = 0;

    switch (day) {
        case 'Friday':
            if (groupType === 'Students') {
                pricePerPerson = 8.45;
            } else if (groupType === 'Business') {
                pricePerPerson = 10.90;
            } else if (groupType === 'Regular') {
                pricePerPerson = 15;
            }
            break;
        case 'Saturday':
            if (groupType === 'Students') {
                pricePerPerson = 9.80;
            } else if (groupType === 'Business') {
                pricePerPerson = 15.60;
            } else if (groupType === 'Regular') {
                pricePerPerson = 20;
            }
            break;
        case 'Sunday':
            if (groupType === 'Students') {
                pricePerPerson = 10.46;
            } else if (groupType === 'Business') {
                pricePerPerson = 16;
            } else if (groupType === 'Regular') {
                pricePerPerson = 22.5;
            }
            break;
    }
    let totalPrice = groupCount * pricePerPerson;
    if (groupType === 'Students' && groupCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && groupCount >= 100) {
        totalPrice = totalPrice - 10 * pricePerPerson;
    } else if (groupType === 'Regular' && groupCount >= 10 && groupCount <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday");
