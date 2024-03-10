function dataTypes1() { // start of functional scope 1

    let number = 15; // число
    let string = "Bobby$"; // текст/string
    let boolean = false; // boolean
    let arrayNumber = [1,2,3,4]; // масив за числа
    let objectWord = {}; // масив за думи

    console.log(typeof massiveNumber) // typeof показва типа на променливата

} // end of functional scope 1

function dataTypes2() { // start of functional scope 2

    if (true) { // start of block scope
        let number = 10;
        console.log(number)
    
    } // end of block scope

    console.log(typeof massiveNumber) // typeof показва типа на променливата

} // end of functional scope 2

dataTypes1();
dataTypes2();

// ------------------------------------------------------------------------------

// Не трябва никога да използваме "var"!
// var - functional scope
// let - block scope
// На const не можем да променим стойноста!
// В JavaScript можем да изграждаме стринг чрез: ''; ""; ``.
// Индексът на string-а е immuteable/не може да бъде променян.
// NaN не е тип, а резултат, който можем да получим, а типа на NaN е number.
// integer - цели числа, floating.point - дробни числа/числа с плаваща запетая.
// parseInt - преобразува даден string в цяло число.
// parseFloat - преобразува даден string в дробно число. 
// Number или + пред променливата преработват string в число.
// Non-zero value - конкретна стойност, която е число.
// 0 - число
// Null - имаме нещо, но няма стойност
// undefined - не е дефинирано
