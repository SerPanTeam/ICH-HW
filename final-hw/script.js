// Модальное окно
const openButton = document.getElementById('openButton');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !openButton.contains(e.target)) {
        modal.close();
    }
});

// Слайдер
let slider_index = 0;
const cards = document.getElementById('cards');
const roundsContainer = document.getElementById('rounds');

function createRounds() {
    for (let i = 0; i < cards.children.length; i++) {
        const button = document.createElement('button');
        if (i === 0) {
            button.classList.add('active');
        }
        roundsContainer.append(button);

        button.addEventListener('click', () => {
            slider_index = i;
            updateSlider();
        });
    }
}

function updateSlider() {
    cards.style.left = `${-slider_index * 500}px`;
    document.querySelectorAll('.rounds button').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === slider_index);
    });
}

document.getElementById('left-btn').addEventListener('click', () => {
    if (slider_index > 0) slider_index--;
    updateSlider();
});

document.getElementById('right-btn').addEventListener('click', () => {
    if (slider_index < cards.children.length - 1) slider_index++;
    updateSlider();
});

createRounds();

// Меню с подпунктами
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) submenu.classList.toggle('visible');
    });
});

// Всплывающие уведомления
function constructNotification(title, text, type) {
    const notification = `
        <div class="notification notification--${type}">
            <strong>${title}</strong>
            <p>${text}</p>
            <span class="close-btn">x</span>
        </div>
    `;
    const container = document.getElementById('notificationsContainer');
    container.insertAdjacentHTML('afterbegin', notification);

    container.querySelector('.close-btn').addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
}

document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    constructNotification('Заказ создан', 'Ожидайте дальнейшей информации', 'success');
    document.getElementById('buttons').classList.remove('buttons--hidden');
});

document.getElementById('buttonPaid').addEventListener('click', () => {
    constructNotification('Заказ оплачен', 'Ожидайте отправки', 'info');
});

document.getElementById('buttonSent').addEventListener('click', () => {
    constructNotification('Заказ отправлен', 'Ожидайте курьера', 'info');
});

document.getElementById('buttonGet').addEventListener('click', () => {
    constructNotification('Заказ получен', 'Ждем вас снова!', 'info');
});
