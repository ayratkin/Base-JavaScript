/*
----------------------------------------------------------------------------------
// Объекты в JS

Способы объявления (Создания)

let userInfo = new Object
let userInfo = {}

// Свойства объекта идут как ключ-значение
// Лучше даже в конце ставить запятую

let userInfo {
    name: 'Вася',
    age: 30,
}

console.log(userInfo.name);

----------------------------------------------------------------------------------
// Подробнее про имена (свойства) объекта

// Имена могут быть составными
// Пример:

let userInfo = {
    name: 'Вася',
    "likes javascript": true,
}

console.log(userInfo["likes javascript"]);

// Пример вычисляемых имен:

let firstPart = 'likes'
let userInfo = {
    name = 'Вася',
    [firstpart + 'javascript']: true
}

console.log(userInfo["likes javascript"]) // true

// Имена = строки либо символы

let userInfo {
    0: "Вася", // 0 - будет строкой
}

// Вложенность объектов:

let userInfo {
    name: 'Вася',
    age: 30,
    address: {
        city: 'Russia',
        street: 'Gagarina'
    }
}
console.log(userInfo.address.street) // Gagarina

----------------------------------------------------------------------------------
// Значение свойств объекта из переменной

function makeUserInfo (name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUserInfo('Вася', 30);
console.log(user); // Вернет обджект с 2 свойствами

// Более краткая запись того же самого:

function makeUserInfo (name, age) {
    return {
        name,
        age,
        gender: 'male'
    };
}

----------------------------------------------------------------------------------
// Изменение объекта и его свойств

// Добавление свойств:

let userInfo {
    name: 'Вася',
    age: 30,
}

userInfo.gender = 'Female' // Добавится новое свойство

// Удаление свойств объекта

let userInfo {
    name: 'Вася',
    age: 30,
}

delete userInfo.age // Удалится свойство с ключом age

12:10