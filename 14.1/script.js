'use strict'

/* 1.Создайте функцию waitForTime, которая возвращает Promise. 
Этот промис должен резолвиться через указанное количество миллисекунд, 
которое нужно передавать в функцию waitForTime в качестве аргумента. 
Если время вышло, промис резолвится с сообщением "Ожидание завершено". */

function waitForTime(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Ожидание ${seconds} сек. завершено`), seconds * 1000);
    })
}
waitForTime(2)
    .then(result => console.log(result))
    .catch(error => console.error(error));
;