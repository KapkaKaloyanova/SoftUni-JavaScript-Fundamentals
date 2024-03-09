function login(input) {
    let count = 0;
   
    for (let i = 1; i < input.length; i++) {
      if (input[0] === input[i].split("").reverse().join("")) {
        console.log(`User ${input[0]} logged in.`);
      } else {
        if (i >= 4) {
          console.log(`User ${input[0]} blocked!`);
        } else {
          console.log("Incorrect password. Try again.");
        }
   
        count++;
      }
    }
  }
   
  login(["Acer", "login", "go", "let me in", "recA"]);