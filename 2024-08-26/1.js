"use strict";
/* 
Создайте класс OrderManager для управления списком заказов в ресторане. 
У класса должны быть следующие статические свойства и методы:
Статические свойства:
orders - массив, который будет хранить объекты заказов. 
Каждый заказ представлен объектом со следующими свойствами:
orderId (уникальный идентификатор заказа, число)
tableNumber (номер стола, число)
items (массив заказанных позиций, где каждая позиция — это объект с itemName 
(название блюда) и price (цена блюда, число))
isPaid (булево значение, указывающее, оплачен заказ или нет)
Статические методы:
addOrder(order) - метод для добавления нового заказа.
markOrderAsPaid(orderId) - метод для пометки заказа как оплаченного по его orderId.
calculateTotalRevenue() - метод, который возвращает общую сумму всех оплаченных заказов.
getOrdersByTable(tableNumber) - метод, который возвращает массив всех заказов для заданного номера стола.
getMostOrderedItem() - метод, который возвращает название блюда, которое было заказано чаще всего. */
class Item {
  constructor(itemName, price) {
    this.itemName = itemName;
    this.price = price;
  }
}
class Order {
  static curId = 0;
  isPaid = false;
  constructor(items, tableNumber) {
    this.id = ++Order.curId;
    this.items = items;
    this.tableNumber = tableNumber;
  }
}
class OrderManager {
  orders = [];
  addOrder(order) {
    this.orders.push(order);
  }
  markOrderAsPaid(orderId) {
    const findOrder = this.orders.find((val) => val.id === orderId);
    if (findOrder) findOrder.isPaid = true;
  }
  calculateTotalRevenue() {
    let totalSum = this.orders.reduce((total, order) => {
      if (order.isPaid) {
        return total + order.items.reduce((sum, item) => sum + item.price, 0);
      }
      return total;
    }, 0);
    /*     this.orders
      .filter((val) => val.isPaid)
      .forEach((val) =>
        val.items.forEach((val) => {
          totalSum += val.price;
        })
      ); */
    console.log("Total Revenue: " + totalSum);
  }
  getOrdersByTable(tableNumber) {}
  getMostOrderedItem() {}
}
const item1 = new Item("Борщ", 10);
const item2 = new Item("Сало", 5);
const item3 = new Item("Водка", 15);
const item4 = new Item("Пиво", 7);
const order1 = new Order([item1, item2, item3, item4], 1);
const order2 = new Order([item1, item2, item3], 1);
const order3 = new Order([item1, item2], 2);
const order4 = new Order([item1], 2);
const orderManager = new OrderManager();
orderManager.addOrder(order1);
orderManager.addOrder(order2);
orderManager.addOrder(order3);
orderManager.addOrder(order4);
console.table(orderManager.orders);
orderManager.markOrderAsPaid(1);
orderManager.markOrderAsPaid(2);
console.table(orderManager.orders);
orderManager.calculateTotalRevenue();
