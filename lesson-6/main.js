/* let user = {
    id: Math.random(),
    name: 'User1',
    number: '+998907777777',
    address: 'St.Roy'
};

for (let value of Object.values(user)) {
    console.log(value);
} */

// Задача 1: Подсчёт количества символов в строках массива

const words = ['apple', 'banana', 'cherry'];

function countCharacters(arr) {
    const char = [];
    for (let num of arr) {
        char.push(num.length);
    }
    return char;
}

const result = countCharacters(words);
console.log(result); // [5, 6, 6]

// Задача 2: Найти максимальное значение в массиве

const numbers = [10, 20, 30, 40, 50];

function findMax (arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const maxNumber = findMax(numbers);
console.log(maxNumber); // 50

// Задача 3: Фильтрация объектов по свойству

function filterByAge(arr, minAge) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].age >= minAge) {
        result.push(arr[i]);
      }
    }
    return result;
}

const people = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Tom', age: 25 }
];

const res = filterByAge(people, 25);
console.log(res);
// [{ name: 'Jane', age: 30 }, { name: 'Tom', age: 25 }]