function repeatString(str,repeatCount) {
    // let result = '';

    // for (let i=1; i<=repeatCount; i++){
    //    result += str;
    // }
    // return result;

    return str.repeat(repeatCount);

}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));