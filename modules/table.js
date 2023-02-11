import { tableRowTemplate, tableBodyTemplate } from "./templates.js";
import { sortDataByKey, state } from './state.js';
import { VALUES } from "./constants.js";

// получение строковых представлений данных для всех строк таблицы, с учетом выбора скрытых колонок
const renderStateData = () => {
    document.querySelector('#tbody').innerHTML = state.data.map((el) =>
        tableRowTemplate(el)
    ).join('');
    showColumns();
};

// создание таблицы с помощью шаблона верстки, отображение строк таблицы
const createTable = () => {
    const html = tableBodyTemplate();
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.innerHTML = div.innerHTML;
    renderStateData();
};

/* добавление слушателей событий для всех элементов select и при выборе 
какого-либо из вариантов происходит сортировка данных, затем перерисовывание таблицы */
const applyButtonsEventListeners = () => {
    const selectsBtns = document.querySelectorAll('#select');

    selectsBtns.forEach((el) => {
        el.addEventListener('change', (event) => {
            const key = event.target.getAttribute('data-key');
            const option = event.target.value;
            if (option === 'increase') {
                sortDataByKey(key);
            }
            if (option === 'decrease') {
                sortDataByKey(key);
                state.data.reverse();
            }
            renderStateData();
        });
    });
};

// функция отображает только те колонки, которые хочет пользователь
// для всех по умолчанию убирается класс hide, и он же добавляется только тем, которые есть в массиве с номерами скрытых колонок
const showColumns = () => {
    VALUES.forEach((el) =>  document.querySelector(`.${el}`).classList.remove('hide'));
    const keys = state.hideColumns.map(i => VALUES[i]);
    keys.forEach((col) => {
        document.querySelector(`.${col}`).classList.add('hide');
        document.querySelectorAll(`[data-key="${col}"]`).forEach((el) => {
            el.classList.add('hide');
        })
    });
};

export { renderStateData, createTable, applyButtonsEventListeners }