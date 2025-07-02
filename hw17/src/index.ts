// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:  
// `price` (число)  
// `quantity` (число)  
// `discount` (число, по умолчанию равен 0)
// Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.


const calculateTotal=(price: number, quantity: number, discount: number = 0):number=>{
  const total = price*quantity;
  const discountAmount = total * (discount /100);
  return total-discountAmount;
}
// console.log(calculateTotal(100, 2));
// console.log(calculateTotal(100, 2, 10));


// Задание 2
// Использование Union типов
// Создайте переменную `id`, которая может быть либо строкой, либо числом.  
// Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.

let id: string | number

const displayId=(id: string | number): void=>{
  if(typeof id === "string"){
    console.log("ID:", id.toUpperCase());
  }else{
    console.log("ID:", id* 10);
  }
}
// console.log(displayId(42));
// console.log(displayId("hello"));


// Задание 3
// Объявление и типизация массивов объектов
// Создайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:  
// `orderId` (строка)  
// `amount` (число)  
// `status` (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, и возвращает массив заказов, соответствующих указанному статусу.

type Order={
  orderId: string,
  amount: number,
  status: "pending" | "shipped" | "delivered"
}

const filterOrdersByStatus=(orders: Order[], status:"pending" | "shipped" | "delivered"): Order[]=>{
  return orders.filter(order => order.status === status)
}

const orders: Order[]=[
  {
  orderId:"1",
  amount: 100,
  status: "pending",
},
{
  orderId:"2",
  amount: 120,
  status: "shipped",
},
{
  orderId:"3",
  amount: 80,
  status: "delivered",
},
]
// console.log(filterOrdersByStatus(orders, "pending"));



// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:  
// название товара (строка)  
// его цену (число)  
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`, обновляет количество товара в объекте `inventory` и возвращает обновленный объект.

let inventory: { [productName: string]: number } = {
  "Product1": 10,
  "Product2": 5,
};

type ProductInfo = [string, number, number];

const updateStock = (inventory: { [productName: string]: number }, productInfo: ProductInfo): { [productName: string]: number } => {
 const [name, price, quantity] = productInfo;

 if(inventory[name]){
  inventory[name]= quantity;
 }
 return inventory
}

const product: ProductInfo = ["Product1", 20.5, 3];
const updatedInventory = updateStock(inventory, product);

console.log(updatedInventory);
