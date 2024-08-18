let filter = localStorage.getItem('filter') || 'filter-all';
setActiveFilter(filter);

let searchString = localStorage.getItem('searchString') || '';
document.querySelector('.search-field__input').value = searchString;

let todos = JSON.parse(localStorage.getItem('todos')) || [];
setCurrrenDate();

showTodos();

function showTodos() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = "";
    todos = todos.sort((a, b) => a.startDateNum - b.startDateNum);
    todos.forEach(val => {
        if ((filter == 'filter-active' && val.checked == '') ||
            (filter == 'filter-done' && val.checked == 'checked') ||
            (filter == 'filter-all'))
            if (!searchString || val.descriptionValue.includes(searchString)) {
                showTodo(val.id, val.startDateValue, val.descriptionValue, val.checked)
            }
    });
}

function showTodo(id, startDateValue, descriptionValue, checked) {
    const todoList = document.querySelector('.todo-list');
    const newTodo = `      
    <li class="todo-block">
        <label for= "checkbox" class= "checkbox" >
          <input type="checkbox" name="checkbox" id="${id}" ${checked} onclick=checkboxOnclickHandler(this)>
          <span class="material-symbols-rounded checkbox__check-icon">
            check
          </span>
        </label>
        <div class="todo-block__data">
          <p class="todo-block__date">${startDateValue}</p>
          <h3 class="todo-block__title">${descriptionValue}</h3>
        </div>
    </li > `;

    todoList.insertAdjacentHTML('beforeend', newTodo);
}

function checkboxOnclickHandler(thisCheckbox) {
    todos.forEach(val => {
        if (val.id == thisCheckbox.id) {
            val.checked = val.checked ? '' : 'checked';
        }
    });
    localStorage.setItem('todos', JSON.stringify(todos));

}

function setCurrrenDate() {
    const nameDayText = document.querySelector(".main-header");
    const today = new Date();
    let currentDay = today.toLocaleDateString('ru', { weekday: 'long' });
    currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1).toLocaleLowerCase();
    nameDayText.textContent = currentDay;

    const dateMonthText = document.querySelector(".header__group-subheader");
    let dateMonth = today.toLocaleDateString('ru', { day: 'numeric', month: 'long' });
    dateMonthText.textContent = dateMonth;
}

function splitButtonClickHandler(thisButton) {
    setActiveFilter(thisButton.id);
    filter = thisButton.id;
    localStorage.setItem('filter', filter);
    showTodos();
}

function setActiveFilter(curFilter) {
    const buttons = document.querySelectorAll('.split-button__button');
    buttons.forEach(val => {
        val.classList.remove('split-button__button--active');
    })
    const btn = document.querySelector(`#${curFilter}`);
    btn.classList.add('split-button__button--active');

}

document.querySelector('#submitBtnClick').addEventListener('click', event => {
    event.preventDefault();
    const description = document.querySelector('#description');
    const descriptionValue = description.value;
    const startDate = document.querySelector('#startDate');
    let startDateValue = startDate.value;
    if (startDateValue)
        startDateValue = new Date(startDate.value);
    else
        startDateValue = new Date();
    if (!descriptionValue)
        return;

    const startDateNum = startDateValue.getTime();
    startDateValue = startDateValue.toLocaleDateString('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const id = crypto.randomUUID();
    const checked = '';
    todos.push({ 'id': id, 'startDateNum': startDateNum, 'startDateValue': startDateValue, 'descriptionValue': descriptionValue, 'checked': checked });
    localStorage.setItem('todos', JSON.stringify(todos));

    startDate.value = '';
    description.value = '';
    showTodos();
})

document.querySelector('.search-field__input').addEventListener('input', event => {
    searchString = event.target.value;
    localStorage.setItem('searchString', searchString);
    showTodos();
})

