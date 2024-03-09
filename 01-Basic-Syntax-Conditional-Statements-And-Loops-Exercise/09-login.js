function login(arrOfStr) {
    let username = arrOfStr.shift();
    let password = username.split('').reverse().join('');

    for (let i = 0; i <= arrOfStr.length; i++) {
        if (arrOfStr[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (i < 3) {
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

