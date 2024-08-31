/* Задача 1
Реализовать функцию, которая будет создавать элементы списка на основе массива данных.
Каждый элемент списка должен содержать кнопку, 
при нажатии на которую будет происходить удаление этого элемента из списка.
 */

const items = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Walk the dog" },
  { id: 3, text: "Read a book" },
  { id: 4, text: "Go to the gym" },
  { id: 5, text: "Call a friend" },
];

/**
 *
 * @param {array} arr
 */
function showArray(arr) {
  const list = document.querySelector(".list");
  const items = [];
  arr.forEach((val) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.id = val.id;
    item.textContent = val.text;

    const but = document.createElement("button");
    but.classList.add("btn");
    but.id = val.id;
    but.textContent = "-";
    but.addEventListener("click", (event) => {
      const listItem = event.target.parentElement;
      listItem.remove();
    });

    item.append(but);
    list.append(item);
  });
}

showArray(items);
