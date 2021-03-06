/*
----------------------------------------------------------------------------------
// Цикл WHILE

while (Условие) {
    // Тело цикла
}

// ПРИМЕР 1:

let num = 0
while (num < 5) {
    console.log(num)
    num++;
}

// Запись без {}

let num = 0
while (num < 5) console.log(num++)

----------------------------------------------------------------------------------
// Конструкция DO...WHILE
// внутри do отработает 1 раз в любом случае

let num = 0;
do {
    console.log(num);
    num++
} while (num > 5);

----------------------------------------------------------------------------------
// Цикл FOR:

for (Начало; Условие; Шаг) {
    // Тело цикла
}

// Пример:

for (let num = 0; num < 5, num++) {
    console.log(num);
}

// Работа цикла for:
// 1) Выполняется начало - let num = 0
// 2) Выполняется условие - num < 5
// 3) Если условие true, выполняется
// тело цикла - console.log(num)
// Выполняется шаг - num++
// Повтор начиная с пункта 2

----------------------------------------------------------------------------------
//Директива BREAK:

let num = 0;
for (; num > 5; num++) {
    console.log(num);
    if (num == 2) break:
}
console.log(num) // Выведет 2

----------------------------------------------------------------------------------
// Директива continue:
// Прерываение дальнейшего выполнения тела цикла
// Пример:

let num = 0:
for (; num < 5; num++) {
    if (num == 2) continue;
    console.log(num);
}
// Выведется: 0, 1, 3, 4

----------------------------------------------------------------------------------
// Метки цикла

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;
        }
        console.log(size)
    }
} 
// Прерывание первого цикла (у родительского), а не самого.s

*/
