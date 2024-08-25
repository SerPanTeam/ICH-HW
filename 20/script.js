"use strict";
/* 
Задача 1
Создайте класс Shape, у которого есть метод draw().
Создайте два наследника класса Shape: Rectangle и Circle.
У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
Создайте массив, содержащий экземпляры классов Rectangle и Circle.
Используйте цикл для вызова метода draw() для каждого элемента массива. 
*/
class Shape {
  draw() {
    console.log("Drawing Shape...");
  }
}
class Rectangle extends Shape {
  draw() {
    console.log("Drawing Rectangle...");
  }
}
class Circle extends Shape {
  draw() {
    console.log("Drawing Circle...");
  }
}
const arr = [new Rectangle, new Circle];
for (let el of arr){
    el.draw();
}