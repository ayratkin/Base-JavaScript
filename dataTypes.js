/*

// ТИПЫ ДАННЫХ 
// у JS Динамическая типизация
// console.log(typeof X) ==> объект typeof возвращает тип данных переменной



let userName;
userName = 'Some string';
userName = 123;

console.log(userName); // Выведет 123 

// ОСНОВНЫЕ ТИПЫ ДАНЫХ:
// ТИП ДАННЫХ undefined - неопределенный тип данных. Пример её возникновения:

let variable;
console.log(variable);

// ТИП ДАННЫХ null - отсутствие данных. Пример её возникновения:

element = document.getElementById('not-exists')
// здесь при попытке получения несуществующего элемента, метод getElementById возвращает null
// переменная element теперь инициализирована значением null, её значение определено

// ТИП ДАННЫХ boolean - булевый тип данных
// ТИП ДАННЫХ number - числовой тип данных. Как для целых чисел, так и с плавающей точкой.
// ТИП ДАННЫХ Nan - тип данных, которых появляется при ошибках в математических операциях. Пример:

console.log(Math.sqrt(-1)))

// ТИП ДАННЫХ string - текст. Пример:
let myName = 'Airat';
console.log(typeof myName);

// f строки в JS. Пример:

const name = "Alex";
const str =
  `Привет, ${name},
   как дела?`;

console.log(str); // Выведет: Привет, Alex, как дела?

// ТИП ДАННЫХ object. Хранит в себе данные в виде ключ-значение

let userInfo {
    name: 'Airat',
    age: 19
}

// ТИП ДАННЫХ Symbol - уникальный идентификатор объекта. Пример:
let id = Symbol('id');

// ТИП ДАННЫХ Function. Пример:
let funcVariable = function name(params) {
    // тело функции
}

// МЕНЯЕМ ТИП ДАННЫХ У ПЕРЕМЕННЫХ

*/
let userAge = '58';
console.log( Number(userAge));