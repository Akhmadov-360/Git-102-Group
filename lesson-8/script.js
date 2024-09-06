// Напишите функцию countProperties(obj), которая принимает объект obj и возвращает количество его собственных свойств.

function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
       count ++;
    }
    return count;
}

const user = {
    name: "Alice",
    age: 30,
    city: "New York"
};
  
console.log(countProperties(user)); // Ожидаемый результат: 3

// Напишите функцию copyProperties(source, target), которая принимает два объекта source и target, и копирует все собственные свойства из source в target.

function copyProperties(source, target) {
    for (let key in source) {
        target[key] = source[key];
    }
    return target;
}

const source = { a: 1, b: 2, c: 3 };
const target = {};

copyProperties(source, target);
console.log(target); // Ожидаемый результат: { a: 1, b: 2, c: 3 }

// Таблица умножения
/* for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
} */



/* function promptUser() {
    const a = parseFloat(prompt("Введите первое число:"));
    const b = parseFloat(prompt("Введите второе число:"));
    return { a, b };
}

function multiply(a, b) {
    const multiplication = a * b;
    return { multiplication };
}

const { a, b } = promptUser();
const { multiplication } = multiply(a, b);

alert(`Результат умножения: ${multiplication}`); */

// Треугольник цифр

const numRows = 10
for (let i = numRows; i >= 1; i--) {
    let row = '';
    for (let j = i; j >= 1; j--) {
        row += j + ' ';
    }
    console.log(row.trim());
}
