// Задача 1: Перебор объекта
// Done

const obj = {
    name: 'Alice',
    age: 25,
    job: 'Developer'
};

function printObjectKeys(obj) {
    let keys = Object.keys(obj);
    console.log(keys);
}

printObjectKeys(obj);

//Задача 2: Клонирование объекта
// Done

function cloneObject(obj) {
    let copy = Object.assign({}, obj);
    console.log(copy);
}

const original = {
    name: 'Bob',
    age: 30
};
  
cloneObject(original);


// Задача 3: Поиск в массиве
// Done

const numbers = [-3, 7, -2, 5, -8, 0];

function findPositiveNumbers(arr) {
    let posNum = arr.filter((n) => n > 0);
    console.log(posNum);
}

findPositiveNumbers(numbers);

// Задача 4: Преобразование массива
// Done

const int = [2, 3, 4];

function squareNumbers(arr) {
    let sqrt = arr.map((n) => n * n);
    console.log(sqrt);
}

squareNumbers(int);

// Задача 5: Сумма элементов массива
// Done

const Int = [1, 2, 3, 4];

function sumArray(arr) {
    let s = arr.reduce((acc, num) => {
        return acc + num;
    })
    return s;
}

const sum = sumArray(Int);
console.log(sum);

// Задача 6: Перебор массива
// Done

const fruits = ['apple', 'banana', 'cherry'];

function logArrayElements(arr) {
    arr.forEach((element, index) => {
        console.log(index, element);
    });
}

logArrayElements(fruits);

// Задача 7: Применение функции к каждому элементу
// Done

const integer = [1, 2, 3];

function double(n) {
  console.log(n * 2);
}

function applyFunctionToArray(arr, fn) {
    arr.forEach((el) => fn(el));
}

applyFunctionToArray(integer, double);

//Задача 8: Проверка типа данных


function isString(value) {
    return typeof value === 'string';
}

console.log(isString('Hello')); // Должно вывести: true
console.log(isString(123));     // Должно вывести: false

// Задача 9: Преобразование числа в строку
// Done

function numberToString(num) {
    let str = num.toString();
    return str;
}

console.log(numberToString(123));


// Задача 10: Объединение массивов
// Done

function concatArrays(arr1, arr2) {
    let bind = arr1.concat(arr2);
    return bind;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = concatArrays(arr1, arr2);
console.log(combined);