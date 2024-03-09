function theatrePromotions(day, age) {
  let thicketPrice = 0;

  if (age >= 0 && age <= 18) {
    switch (day) {
      case "Weekday":
        thicketPrice = 12;
        break;
      case "Weekend":
        thicketPrice = 15;
        break;
      case "Holiday":
        thicketPrice = 5;
        break;
      default:
        console.log("Error!");
        break;
    }
    console.log(`${thicketPrice}$`);

  } else if (age > 18 && age <= 64) {
    switch (day) {
      case "Weekday":
        thicketPrice = 18;
        break;
      case "Weekend":
        thicketPrice = 20;
        break;
      case "Holiday":
        thicketPrice = 12;
        break;
      default:
        console.log("Error!");
        break;
    }
    console.log(`${thicketPrice}$`);

  } else if (age > 64 && age <= 122) {
    switch (day) {
      case "Weekday":
        thicketPrice = 12;
        break;
      case "Weekend":
        thicketPrice = 15;
        break;
      case "Holiday":
        thicketPrice = 10;
        break;
      default:
        console.log("Error!");
        break;
    }
    console.log(`${thicketPrice}$`);

  } else if (age < 0 || age > 122) {
    console.log("Error!");
  }
}

theatrePromotions("Holiday", 15);
theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
