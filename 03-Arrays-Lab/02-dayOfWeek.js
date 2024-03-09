function dayOfWeek(number) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (number >= 1 && number <= 7) {
        console.log(`${daysOfWeek[number - 1]}`);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
