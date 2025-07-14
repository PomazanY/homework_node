// Задание 1
// Класс `Animal` и его наследник `Dog`
// Создайте класс `Animal`, который содержит свойства `name` (имя животного) и `species` (вид животного).
// Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`.
// Затем создайте класс-наследник `Dog`, который добавляет новое свойство `breed` (порода собаки) и переопределяет метод `sound()`, чтобы он выводил `"The dog barks"`.

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log(`The ${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    console.log(`The dog ${this.name} of breed ${this.breed} barks`);
  }
}
const animal = new Animal("Rokki", "dog");
console.log(animal.sound());
const dog = new Dog("Vali", "dog", "pudel");
console.log(dog.sound());

// Задание 2
// Статическое свойство для учета всех книг
// Создайте класс `Library`, который имеет статическое свойство `totalBooks` (общее количество книг).
// При каждом добавлении книги это свойство должно увеличиваться.
// В классе также должен быть метод `addBook()`, который увеличивает счетчик книг.
// Создайте несколько объектов класса и проверьте, как изменяется общее количество книг.

class Library {
  static totalBooks = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addBook(): void {
    Library.totalBooks += 1;
  }
}

const book1 = new Library("Book One");
book1.addBook();
console.log(Library.totalBooks);

const book2 = new Library("Book Two");
book2.addBook();
console.log(Library.totalBooks);

const book3 = new Library("Book Three");
book3.addBook();
console.log(Library.totalBooks);

// Задание 3
// Переопределение конструктора в классе `Vehicle`
// Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) и переопределяет конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.

class Vehicle {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}
class Motorcycle extends Vehicle{
  type:string
  constructor(make: string, model: string, type: string){
    super(make, model)
    this.type = type
  }
}
const moto = new Motorcycle("Yamaha", "MT-07", "Sport");

console.log(moto.make);   
console.log(moto.model);  
console.log(moto.type);   