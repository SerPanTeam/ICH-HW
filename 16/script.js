'use strict'
/* 
Задание 1
Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. 
Результат вывести в консоль. 
*/

async function fetchData(url) {
    try {
        let resp = await fetch(url);
        if (!resp.ok) {
            throw new Error("Error response!");
        }
        let data = await resp.json();
        console.log(data);
    } catch (error) {
        console.log("Error! ", error.message);
    }
}
fetchData('https://jsonplaceholder.typicode.com/todos/1');

/* Задание 2
Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. 
Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль. */

fetchData('https://jsonplaceholder.typicode.com/posts?_limit=10');