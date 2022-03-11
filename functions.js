/*
----------------------------------------------------------------------------------
// Объявление функции (Function Decloration)

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

----------------------------------------------------------------------------------
// Function Expression (Функциональное выражение)

// Это еще один метод создания функций. После ковычек обязательно точка с запятой

let showMessage = function () {
    console.log('Привет');
};

showMessage();

// В переменную можно запихнуть и ранее объявленную функцию
// Например:

function changeMessage() {
    // Используется внешняя переменная
    message = "Сообщение"
};

someVar = changeMessage;

changeMessage()
someVar() // Обе функции вернут то же самое

// Разница между Function Decloration и Expression
// Function Decloration мы можем вызвать в любом месте программы, 
// а Expression только после объявления. 

// Объявив функцию за пределами блока (в этом случае if), мы 
// сможем достучаться до неё вне этого блока.
// Напрример:

let getSumm;

if(2 > 1) {
    getSumm = function () {
        let summ = 1 + 2;
        console.log(summ);
    };
}

getSumm();

----------------------------------------------------------------------------------
// Стрелочные функции (Arrow functions)

// Тоже являются функциональными выражениями (Function Expression)
// Пример стрелочной функции: (нет ключевого слово фанкшн)

let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));

// Пример многострочной стрелочной функции:

let getMessage = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};

----------------------------------------------------------------------------------
// Планирование setTimeout и setInterval

// Чтобы реализовать планирование существует два метода:
// 1. setTimeout позволяет вызвать функцию один раз
// через опеределенный интервал времени
// 2. setInterval позволяет вызвать функцию регулярно,
// повторяя вызов через определенный интервал времени.

// setTimeout(функция или код, задержка, параметр)
// setInterval(функция или код, задержка, параметр)

// Пример 1:

let showMessage = function (name) {
    console.log('Привет' + name );
};

setTimeout(showMessage, 3000, 'Вася') // Через 3 секунды выполнится 1 раз функция
setInterval(showMessage, 1000, 'Вася') // Каждую секунду будет выводится функция

