'use strict'
/* 
Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. 
На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: 
id, username, email, address.city, phone и company.name. Стили добавляем произвольно. 
*/

let mainContainer = document.querySelector('.container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => {
        console.table(data);
        data.forEach(val => {
            let container = document.createElement('div');
            container.classList.add('container__item');
            container.append(
                createElement('id', val.id),
                createElement('username', val.username),
                createElement('email', val.email),
                createElement('city', val.address.city),
                createElement('phone', val.phone),
                createElement('company', val.company.name),
            );
            console.log(val);
            mainContainer.append(container);

        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    function createElement(nameElement, valueElement) {
            let element = document.createElement('div');
            element.classList.add(nameElement);
            element.textContent = valueElement;
            return element;
        }