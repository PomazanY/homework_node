// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.

const greetUser = (name: string): void => {
  console.log(`Привет, ${name}`);
};
// console.log(greetUser("Yulia"));

// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
// Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.

interface Person {
  name: string;
  age: number;
  city: string;
}

const printPersonInfo = (person: Person): void => {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`City: ${person.city}`);
};
const person: Person = {
  name: "Yulia",
  age: 34,
  city: "Veldenz",
};
// console.log(printPersonInfo(person));

// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.

const squareNumber = (a: number): number => {
  return a ** 2;
};
// console.log(squareNumber(2));

// Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.

const isEven = (number: number): boolean => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(isEven(2));

// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
// Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.

interface Student {
  name: string;
  grade: number;
}

const printStudentInfo = (student: Student): void => {
  console.log(`Student: ${student.name}`);
  console.log(`Grade: ${student.grade}`);
};

const student: Student = {
  name: "Anna",
  grade: 5,
};

// console.log(printStudentInfo(student));

// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.

const logMessage=(text: string): void=>{
    console.log(`This text "${text}"`);
    
}
// console.log(logMessage('Hello world'));
