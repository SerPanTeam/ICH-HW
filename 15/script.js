'use strict'
/* 
Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. 
На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: 
id, username, email, address.city, phone и company.name. Стили добавляем произвольно. 
*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => {
        console.table(data);
        let container = document.createElement('div').classList.add('container');
        data.forEach(val => {
            let id = document.createElement('div').classList.add('id');
            id.co = val.id;
            let username = document.createElement('div').classList.add('username');
            username = val.username;
            let email = document.createElement('div').classList.add('email');

            let city = document.createElement('div').classList.add('city');
            let phone = document.createElement('div').classList.add('phone');
            let company = document.createElement('div').classList.add('company');
            console.log(val.id);
        });
    })

    function createElement(nameElement){

    }