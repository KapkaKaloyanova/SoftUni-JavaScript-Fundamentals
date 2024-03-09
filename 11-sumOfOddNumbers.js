function sumOfOddNumbers(n) {
  let sum = 0;
  let num = 0;

  for (i = 1; i <= n; i++) {
   //take all odd numbers
    if (i % 2 !== 0) {
      num = i;
      sum += num;
      console.log(num);
      n++;
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
