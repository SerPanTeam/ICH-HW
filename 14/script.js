'use strict'
let loginBtn = document.querySelector('#loginBtn');
if (loginBtn)
    loginBtn.addEventListener('click', event => {
        event.preventDefault();
        let loginField = document.querySelector('#loginField').value;
        let passwordField = document.querySelector('#passwordField').value;
        let passwordValue = localStorage.getItem(loginField);
        console.log(passwordField);
        if (passwordValue && passwordValue == passwordField) {
            document.querySelector('.container').style.display = 'none';
            document.body.appendChild(document.createElement('h2')).textContent = "Авторизация выполнена успешно!";
        }
        else {
            let errorLabel = document.querySelector('#error');
            errorLabel.style.display = 'block';
        }
    });

let btnRegistr = document.querySelector("#btnRegistr");
if (btnRegistr)
    btnRegistr.addEventListener("click", event => {
        event.preventDefault();

        const validations = [
            (checkValue({ field: 'loginField', min: 2, max: 10, onlyLetter: true })),
            (checkValue({ field: 'passwordField', min: 5, max: 26, onlyLetter: true })),
            (checkValue({ field: 'nameField', min: 2, max: 24, onlyLetter: true })),
            (checkValue({ field: 'emailField', min: 2, requiredSymbol: '@' })),
            (checkValue({ field: 'telField', min: 8, max: 12, onlyDigit: true, requiredSymbol: '+', positionOfRequiredSymbol: 0 }))
        ];

        if (validations.every(val => val === true)) {
            document.querySelector('.container').style.display = 'none';
            document.body.appendChild(document.createElement('h2')).textContent = "Регистрация выполнена успешно!";
            setTimeout(() => window.location.href = "./index.html", 2000);
            const login = document.querySelector('#loginField').value;
            const password = document.querySelector('#passwordField').value;
            localStorage.setItem(login, password);
        }


    });

function checkValue({ field, min = 0, max = 64, requiredSymbol, positionOfRequiredSymbol, onlyLetter = false, onlyDigit = false }) {
    const curField = document.querySelector(`#${field}`);
    const fieldValue = String(curField.value);
    let status = true;
    if (fieldValue.length < min) {
        curField.placeholder = `Минимум ${min} симв.`;
        status = false;
    }
    if (fieldValue.length > max) {
        curField.placeholder = `Максимум ${max} симв.`;
        status = false;
    }
    if (onlyLetter) {
        if (!/^[a-zA-Zа-яА-Я]+$/.test(fieldValue)) {
            curField.placeholder = `Только буквы`;
            status = false;
        }
    }
    if (requiredSymbol) {
        if (fieldValue.indexOf(requiredSymbol) == -1) {
            curField.placeholder = `Отсутствует символ. ${requiredSymbol}`;
            status = false;
        }
        if (positionOfRequiredSymbol >= 0) {
            if (fieldValue.indexOf(requiredSymbol) != positionOfRequiredSymbol) {
                curField.placeholder = `${requiredSymbol} должен быть на ${positionOfRequiredSymbol + 1} поз.`;
                status = false;
            }
        }
    }
    if (onlyDigit) {
        if (requiredSymbol) {
            if (fieldValue.indexOf(requiredSymbol) == positionOfRequiredSymbol) {
                if (!/^\d+$/.test(fieldValue.replace(requiredSymbol, ''))) {
                    curField.placeholder = `Только цифры`;
                    status = false;
                }
            }
        }
    }

    if (!status) {
        curField.value = "";
        curField.style = "border-color: red;";
    } else {
        curField.style = "border-color: green;";
    }

    return status;
}