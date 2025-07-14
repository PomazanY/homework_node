// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  name: string;
  year: number;

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return `Bark from ${this.name} (${this.year})`;
  }
}
class Cat extends Animal {
  makeSound(): string {
    return `Meow from ${this.name} (${this.year})`;
  }
}

const animals: Animal[] = [
  new Dog("Rex", 2018),
  new Cat("Mimi", 2020),
  new Dog("Bobby", 2017),
];

for (const animal of animals) {
  // console.log(animal.makeSound());
}

// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getArea(): number;
  abstract getPermeter(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(name: string, radius: number) {
    super(name);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
  getPermeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
  getPermeter(): number {
    return 2 * (this.width + this.height);
  }
}

abstract class ColoredShape extends Shape {
  abstract color: string;
  abstract calculateArea(): number;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(name: string, radius: number, color: string) {
    super(name);
    this.radius = radius;
    this.color = color;
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPermeter(): number {
    return 2 * Math.PI * this.radius;
  }

  calculateArea(): number {
    return this.getArea();
  }
}
class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(name: string, width: number, height: number, color: string) {
    super(name);
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPermeter(): number {
    return 2 * (this.width + this.height);
  }

  calculateArea(): number {
    return this.getArea();
  }
}
const coloredShapes: ColoredShape[] = [
  new ColoredCircle("circle1", 5, "red"),
  new ColoredRectangle("rect1", 4, 6, "blue"),
];

// coloredShapes.forEach(shape => {
//   console.log(`Name: ${shape.name}`);
//   console.log(`Color: ${shape.color}`);
//   console.log(`Area: ${shape.calculateArea().toFixed(2)}`);

// });

// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

abstract class Appliance {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract turnOn(): string;
  abstract turnOff(): string;
}

class WashingMachine extends Appliance {
  turnOn(): string {
    return `Washing Machine "${this.name}" is now ON.`;
  }
  turnOff(): string {
    return `Washing Machine "${this.name}" is now OFF.`;
  }
}

class Refrigerator extends Appliance {
  turnOn(): string {
    return `Washing Machine "${this.name}" is now ON.`;
  }
  turnOff(): string {
    return `Washing Machine "${this.name}" is now OFF.`;
  }
}
const washing: Appliance[] = [
  new WashingMachine("Bosch"),
  new Refrigerator("LG"),
];

washing.forEach((appliance) => {
  // console.log(appliance.turnOn());
  // console.log(appliance.turnOff());
});

// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  name: string;
  balance: number = 0;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  abstract deposit(amount: number): number;
  abstract withdraw(amount: number): number;
}

class SavingsAccount extends Account {
  interestRate: number;

  constructor(name: string, initialBalance: number, interestRate: number) {
    super(name, initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient funds in the account ${this.name}`);
    }
    return this.balance;
  }
}
class CheckingAccount extends Account {
  fee: number;

  constructor(name: string, initialBalance: number, fee: number) {
    super(name, initialBalance);
    this.fee = fee;
  }

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number {
    const totalAmount = amount + this.fee;
    if (totalAmount <= this.balance) {
      this.balance -= totalAmount;
    } else {
      console.log(`Insufficient funds in the account ${this.name}`);
    }
    return this.balance;
  }
}

// const savings = new SavingsAccount("Yuli", 1200, 6);
// savings.deposit(500);
// savings.withdraw(300);
// console.log(`Savings: ${savings.balance.toFixed(2)} EUR`);

// const checking = new CheckingAccount("Ol", 800, 2);
// checking.deposit(200);
// checking.withdraw(100);
// console.log(`Checking: ${checking.balance.toFixed(2)} EUR`);

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract play(): string;
}

class Audio1 extends Media {
    play(): string{
    return `Playing audio ${this.name}`
  }
}
class Video extends Media {
    play(): string{
    return `Playing video ${this.name}`
  }
}

const media: Media[]=[
  new Audio1("Lofi Beats"),
  new Video("Nature Documentary")
]

media.forEach(item => {
  console.log(item.play());
})