import { tableRowTemplate, tableBodyTemplate } from "./templates.js";
import { sortDataByKey, state } from './state.js';
import { VALUES } from "./constants.js";

const renderStateData = () => {
    document.querySelector('#tbody').innerHTML = state.currentData.map((el) =>
        tableRowTemplate(el)
    ).join('');
    showColumns();
};

const createTable = () => {
    const html = tableBodyTemplate();
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.innerHTML = div.innerHTML;
    renderStateData();
};

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
                state.currentData.reverse();
            }
            renderStateData();
        });
    });
};

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