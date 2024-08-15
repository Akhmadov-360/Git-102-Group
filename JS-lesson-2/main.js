// Функция для запроса данных у пользователя
function promptUser() {
    const a = parseFloat(prompt("Введите первое число:"));
    const b = parseFloat(prompt("Введите второе число:"));
    return { a, b };
}

// Функция для выполнения математических операций
function mathOperations(a, b) {
    const multiplication = a * b;
    const division = b !== 0 ? a / b : "Деление на ноль невозможно";
    const plus = a + b;
    const minus = a - b;
    return { multiplication, division, plus, minus };
}

// Основной код
const { a, b } = promptUser();
const { multiplication, division, plus, minus } = mathOperations(a, b);

console.log(`Результат умножения: ${multiplication}`);
console.log(`Результат деления: ${division}`);
console.log(`Результат сложения: ${plus}`);
console.log(`Результат вычитания: ${minus}`);