function reversedChars(char1, char2, char3) {

    // console.log(`${char3} ${char2} ${char3}`);

    let charToString = char1+char2+char3;
    console.log(charToString.split('').reverse().join(' '));

    // let strToArr=[];
    // strToArr.push(char1);
    // strToArr.push(char2);
    // strToArr.push(char3);

    // console.log(strToArr.reverse().join(' '));
}
reversedChars('A','B','C')