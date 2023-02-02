import { tableRowTemplate, tableBodyTemplate } from "./templates.js";
import { sortDataByKey, state } from './state.js'

const renderStateData = () => {
    document.querySelector('#tbody').innerHTML = state.data.map((el) =>
        tableRowTemplate(el)
    ).join('');
};

const createTable = () => {
    const html = tableBodyTemplate();
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.innerHTML = div.innerHTML;
    renderStateData();
};

export const applyButtonsEventListeners = () => {
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
        })
    })
}

// const setEyeColors = (el) => `
// <div style=></div>
// `
//     el.style.backgroundColor = '#d3d3d3'



export { renderStateData, createTable }