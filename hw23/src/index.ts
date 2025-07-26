// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.

const getPromise=(delay: number)=> new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`Delay ${delay}`)
    },delay)
});
const getPromisesResult = async(): Promise<void>=>{
    try{
        const result1: string = await getPromise(1000)
        console.log(result1);
        const result2: string = await getPromise(2000)
        console.log(result2);
        const result3 = await getPromise(3000)
        console.log(result3);
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
        }
    }
}
// getPromisesResult()


// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.

const getPromiseToUpperCase=(string: string)=> new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(string.toLocaleUpperCase())
    },2000)
});

const getAllPromiseParallel = async(array: string[]): Promise<void>=>{
    const promisses = array.map<Promise<string>>(getPromiseToUpperCase);
    const result: string[] = await Promise.all<Promise<string>[]>(promisses)
    console.log(result);
}
const myArray: string[] = ["heelo", "world"]
getAllPromiseParallel(myArray)



// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`. 
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.


const promise1: Promise<string>= new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 1")
    },2000)
});
const promise2: Promise<string>= new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 2")
    },2000)
});
const promise3: Promise<string>= new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 3")
    },2000)
});

const getResultAllPromisses = async(promise1: Promise<string>, promise2: Promise<string>, promise3: Promise<string>): Promise<void>=>{
    try{
        const result:string[] = await Promise.all<Promise<string>[]>([promise1, promise2, promise3])
        console.log(result);
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
        }
    }
}
getResultAllPromisses(promise1, promise2, promise3)



// Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.

const getPromiseFromNumberWithDelay = async (arr: number[]): Promise<void> => {
  const arrPromises: Promise<string>[] = arr.map<Promise<string>>(
    (num: number) => getPromise(num)
  );
  const result: string[] = await Promise.all(arrPromises);
  console.log(result);
};

getPromiseFromNumberWithDelay([1000, 2000, 1500, 4000]);