
// task1
function sayHello(name) {
    return "Привет, " + name + "!";
}
console.log(sayHello('Анна')); 

// task2

function greetUser(name, timeOfDay = 'день') {
    let greeting;
    
    switch(timeOfDay) {
        case 'утро':
            greeting = 'Доброе утро';
            break;
        case 'день':
            greeting = 'Добрый день';
            break;
        case 'вечер':
            greeting = 'Добрый вечер';
            break;
        default:
            greeting = 'Здравствуйте';
    }
    
   return `${greeting}, ${name}!`;
}

console.log(greetUser('Анна')); // "Добрый день, Анна!"
console.log(greetUser('Иван', 'утро')); // "Доброе утро, Иван!"

// task3

function isEven(number) {
   if (number % 2 === 0) {
        return "Чётное";
    } else {
        return "Нечётное";
    }
}
console.log(isEven(4)); // "Чётное"
console.log(isEven(7)); // "Нечётное"

// task4

function repeatText(text, n) {
    
    if (n < 1) {
        return "Неверное значение n";
    }
    let result = ""; 

     for (let i = 0; i < n; i++) {
        result += text; 
        
        if (i < n - 1) {
            result += " "; // пробел между повторениями
        }
    }
    return result;
}
console.log(repeatText('Привет', 3)); // "Привет Привет Привет
console.log(repeatText('Привет', 0));

// task5

function square(number) {
    return number * number;
}
let num = 45;
let squaredResult = square(num);

console.log(`Квадрат числа ${num} равен ${squaredResult}`);