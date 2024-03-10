function sumDigits(num) {
  let sum = 0;
  let numAsStr = num.toString();

  for (let i = 0; i < numAsStr.length; i++) {
    sum += Number(numAsStr[i]);
  }
  console.log(sum);
}
sumDigits(245678);
