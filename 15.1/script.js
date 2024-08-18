const nameDayText = document.querySelector(".main-header");
const today = new Date();
let currentDay = today.toLocaleDateString('ru', { weekday: 'long' });
currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1).toLocaleLowerCase();
nameDayText.textContent = currentDay;

const dateMonthText = document.querySelector(".header__group-subheader");
let dateMonth = today.toLocaleDateString('ru', {day: 'numeric', month: 'long' });
dateMonthText.textContent = dateMonth;