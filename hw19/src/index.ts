// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
};

const numbers = [1, 2, 3, 5, 88, 4, 10];
const result = sumEvenNumbers(numbers);
// console.log(result);


// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
  (text: string): boolean;
}

const isEmpty: StringToBooleanFunction = (text: string): boolean => {
  return text.trim().length === 0;
};
// console.log(isEmpty(""));
// console.log(isEmpty("Empty"));



// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

type CompareStrings = (str1: string, str2: string) => boolean;

const areStringsEqual: CompareStrings = (str1, str2) => {
  return str1 === str2;
};

console.log(areStringsEqual("hello", "hello")); 
console.log(areStringsEqual("hello", "world")); 


// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

const getLastElement = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

console.log(getLastElement([1, 2, 3]));             
console.log(getLastElement(["a", "b", "c"]));         
                 

// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

const makeTriple =<T> (a: T, b:T, c:T):T[]=>{
  return [a,b,c]
}
console.log(makeTriple("a","b","c"));
