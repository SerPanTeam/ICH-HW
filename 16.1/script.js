/* 
HTML, CSS, JavaScript: домашние задание 16.1 morning
Задание 1 
Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, 
в блоке catch сделать вывод консоль сообщения об ошибке. 
Для проверки блока catch сделать намеренную ошибку в url запроса.

*/

async function fetchData(url) {
    try {
        let resp = await fetch(url);
        if (!resp.ok) {
            throw new Error("Response is not ok!");
        }
        let data = await resp.json();
        console.log(data);
    } catch (error) {
        console.error("Error", error.message);
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts?userId=1');
/* 
Задание 2
Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.  
*/

function devide(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Deviding by zero!");
        }
        else {
            return num1 / num2;
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
}
console.log(devide(100, 0)); 