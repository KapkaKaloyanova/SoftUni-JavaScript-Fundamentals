function listOfProducts(arr) {
    let sorted = arr.sort();
    for (i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
//Array of products. Print a numbered array of all the products ordered by name.