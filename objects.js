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
// Изменение объекта и его свойств:

// 1. Добавление свойств:

let userInfo {
    name: 'Вася',
    age: 30,
}

userInfo.gender = 'Female' // Добавится новое свойство

// 2. Удаление свойств объекта

let userInfo {
    name: 'Вася',
    age: 30,
}

delete userInfo.age // Удалится свойство с ключом age

// 3. Изменение свойств объекта

let userInfo {
    name: 'Вася',
    age: 30,
}

userInfo.age = 18 // 30 изменится на 18

// 4. Изменение свойств объекта через переменную
// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него
// Пример:

let userInfo {
    name: 'Вася',
    age: 30,
}

let user = userInfo

user.age = 18
console.log(userInfo.age) // При изменении user изменится значение
                          // в userInfo

// Дублирования объекта в другую переменную:
// Используется Object.assign(куда(объект), что(свойство#1), ..)
// Пример:

let userInfo {
    name: 'Вася',
    age: 30,
}

let newUser = Object.assign({}, userInfo);

----------------------------------------------------------------------------------
// Проверка существования свойств у объекта

let userInfo {
    name: 'Вася',
    age: 30,
}

if (userInfo.age) {
    console.log(userInfo.age)
}