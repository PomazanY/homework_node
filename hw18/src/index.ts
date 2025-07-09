// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

type Consent = "user" | "admin" | "superadmin";

type Admin = {
  name: string;
  permissions: Consent[];
};
type User = {
  name: string;
  email: string;
};

type AdminUser = User & Admin;

const newUserAbmin: AdminUser = {
  name: "Yuli",
  email: "yuli@gmail.com",
  permissions: ["user"],
};

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year: number;
};

function printCarInfo(car: Car): void {
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Engine: ${car.engine.type}`);
  console.log(`Horsepower: ${car.engine.horsepower}`);
  console.log(`Year: ${car.year}`);
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Hybrid",
    horsepower: 121,
  },
  year: 2021,
};

// printCarInfo(myCar);

// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface IProduct {
  name: string;
  price: number;
}

const calculateDiscount = (product: IProduct, discount: number): number => {
  const newPrice = product.price - (product.price * discount) / 100;
  return Number(newPrice.toFixed(0));
};

const product: IProduct = {
  name: "Phone",
  price: 599,
};
const finalPrice = calculateDiscount(product, 10);
// console.log(`Price with discount: ${finalPrice} euro`);

// Задание 4
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface IEmployee {
  name: string;
  salary: number;
}

const employees: IEmployee[] = [
  { name: "Alice", salary: 4000 },
  { name: "Bob", salary: 3500 },
  { name: "Charlie", salary: 5000 },
];

const getAllSalaries = (employees: IEmployee[]): number[] => {
  return employees.map((emp) => emp.salary);
};
const salaries = getAllSalaries(employees);
// console.log(salaries);



// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.

interface IPerson {
  firstName: string,
  lastName: string,
}

interface IStudent extends IPerson {
  grade: number;
}

const student: IStudent={
  firstName: "Oleg",
  lastName: "Popov",
  grade: 55,
}

function printStudentInfo(student: IStudent): void{
  console.log(`${student.firstName} ${student.lastName}`);
  console.log(`Grade: ${student.grade}`);
}

printStudentInfo(student)

// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface Concat{
  str1: string,
  str2: string
}

const concatStrings = (concat: Concat): string => {
  return concat.str1 + concat.str2;
};

const result = concatStrings({ str1: "Hello, ", str2: "world!" });
console.log(result); 
