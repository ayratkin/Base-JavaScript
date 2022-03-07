/*
// IF ELSE в JAVASCRIPT

// ПРИМЕР 1:
let message = 'Привет'

if (2 > 1) {
    // Код выполняется только если
    // Выражение в скобках вернет тру
    console.log(message);
}

// ПРИМЕР 2:
let message = 'Привет'
if ("") {
    // Все преобразуется в булевый тип тру и НЕ выполнится (Пустая строка)
    console.log(message);
}

// Более упрощенная запись. Когда только 1 условие.
if (2 > 1) console.log(message);

----------------------------------------------------------------------------------
// БЛОК ELSE

// ПРИМЕР 1
let message = "Hello, world";
let myNumber = 5;

if (myNumber > 10) {
    console.log(message);
} else {
    colsole.log('Условие не выполнено')
}

// ПРИМЕР 2
*/

let message = "Hello, World!";
let myNumber = 5;

if (myNumber > 50) {
    console.log(message + 50)
} else if (myNumber > 30) {
    console.log(message + 30)
}