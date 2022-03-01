/*

// ПЕРЕМЕННЫЕ В JS

// Верное объявление
let age;
let _color;
let $sdgdf;

// НЕ верное объявление
let 123info;
let my-age;

// В JS юзается CamelCase
let myAge // Каждое новое слово кроме первого с заглавной буквы

// Можно сначала объявить пустую переменную, а потом присвоить ей значение
// let Переводится как "Пусть.."

let myString;
myString = 'Hello, World!';
console.log(myString);

// Переменные можно объявлять через запятую с одним let
let myName = 'Airat',
    myAge = 36,
    myGender = 'Male';

// Изменение занчения переменной
let myAge = 38;
myAge = 20;
console.log(myAge) => Выведет 20

// Передача значений перемнных
let myName = 'Airat',
    myNewName = 'Sanya';

myName = myNewName;
console.log(myName) => Выведет Sanya

// КОНСТАНТЫ
// ОБЪЯВЛЕНИЕ КОНСТАНТ

const myAge = 36;
myAge = 18
console.log(myAge)

// Константы, значение которых известно заранее, 
// следует записывать в верхнем регистре через 
// нижнее подчеркивание

const BLOCK_SIZE = 25;

*/

// Переменные можно объявлять черезе var
// Отличие таких переменных:
// 1. Область видимости выходит за рамки ифов, циклов:

if (true) {
    var myVar = 10 
}

console.log(myVar)