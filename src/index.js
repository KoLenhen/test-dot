import './styles/index.css';
const selectors = document.querySelectorAll('.form__label_select');
const arrows = document.querySelectorAll('.form__arrow');

const checkbox = document.querySelector('.form__input_checkbox');
checkbox.addEventListener('change', handleCheck);

for (let item of selectors) {
    item.addEventListener('click', handleSelectorClick);
}

for (let item of arrows) {
    item.addEventListener('click', handleSelectorClick);
}

function handleSelectorClick(event) {
    const label = event.target.closest('.form__label_select');
    const list = label.querySelector('.form__list');
    const arrow = label.querySelector('.form__arrow');
    list.classList.toggle('form__list_active');
    list.addEventListener('mouseleave', () => {
        list.classList.remove('form__list_active')
        arrow.classList.remove('form__arrow_up');
    })
    arrow.classList.toggle('form__arrow_up');
    const listItems = label.querySelectorAll('.form__item');
    for (let item of listItems) {
        item.addEventListener('click', () => {
            label.querySelector('.form__input').value = item.textContent;
            list.classList.remove('form__list_active')
            arrow.classList.remove('form__arrow_up');
        });
    }
}

function handleCheck(event) {
    const container = event.target.closest('.form__wrap');
    const labelsListItems = container.querySelectorAll('.form__label_temp');
    for (let item of labelsListItems) {
        item.classList.toggle('form__label_disabled');
    }
}

