let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    display.value = evaluateExpression(display.value);
}

function evaluateExpression(expression) {
    let numbers = expression.split(/[-+*/%]/).map(Number);
    let operators = expression.split('').filter(char => ['+', '-', '*', '/', '%'].includes(char));
    while (operators.length > 0) {
        let operator = operators[0];
        let a = numbers[0];
        let b = numbers[1];
        let result;

        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = b !== 0 ? a / b : 0;
                break;
            case '%':
                result = b !== 0 ? a % b : 0;
                break;
        }
        numbers.splice(0, 2, result); // Replacing the first two numbers with the result
        operators.splice(0, 1);
    }

    return numbers[0];
}
