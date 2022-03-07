/*
----------------------------------------------------------------------------------
// Объявление функции

function myFunc(myParameters) {
    //тело функции
}

----------------------------------------------------------------------------------
// Имена функций

// Должны быть простыми и характеризующими действия, происходящие в теле функции
// Примеры:

// "show...",
// "get...",
// "calc...",
// "create...",
// "chech"

----------------------------------------------------------------------------------
// Вызов функции

// Функцию можно вызывать до ее объявления и после

function showMessage() {
    console.log('Some message');
}

showMessage(); // Вызываем функцию


----------------------------------------------------------------------------------
// Вложенность и видимость функций

function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    }

    function getNumTwo() {
        numTwo = 2;
    }

    getNumOne():
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(numSumm);
}

getNumOne(); // Ошибка. Функция вне видимости.
getNumTwo(); // Ошибка. Функция вне видимости.

----------------------------------------------------------------------------------
// Локальные и внешние переменные

// 1. Пример локальной перменной:
function showMessage() {
    // Локальная переменная
    let message = 'Сообщение';
    console.log(message);
}

console.log(message); // Ошибка. Эта переменная объявлена только локально

// 2. Пример глобальной переменной:
// (Перменная существует глобально, с помощью функций мы можем изменять её глоабльное значение)

let message:

function changeMessage() {
    // Используется внешняя переменная
    message = "Сообщение"
}

changeMessage();
console.log(message); // Выведет слово Сообщение

----------------------------------------------------------------------------------
// Аргументы функции (Её параметры)

// 1) Пример функции:

function calcSum(numOne, numTwo) {
    console.log(`Переменная numOne: ${numOne}`);
    console.log(`Переменная numTwo: ${numTwo}`);

    let numSumm = numOne + numTwo;
    
    console.log(`Сумма: ${numSumm}`);
}

calcSum(1, 2);

// 2) Та же функция, но указаны значения по умолчанию:

function calcSum(numOne = 1, numTwo = 2) {
    console.log(`Переменная numOne: ${numOne}`);
    console.log(`Переменная numTwo: ${numTwo}`);

    let numSumm = numOne + numTwo;
    
    console.log(`Сумма: ${numSumm}`);
}

calcSum();

// Пример колбэк-функции:
// (Когда в качестве аргумента функции передается другая функция и потом вызывается)

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);

----------------------------------------------------------------------------------
// Директива RETURN

function calcSum(numOne = 1, numTwo = 2) {
    console.log(`Переменная numOne: ${numOne}`);
    console.log(`Переменная numTwo: ${numTwo}`);

    let numSumm = numOne + numTwo;
    
    // Возврат
    return numSumm;

    // Дальше код не выполнится
}

let funcRez = calcSum(1, 2);