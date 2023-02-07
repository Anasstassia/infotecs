import { checkboxElement } from "./templates.js";
import { state } from "./state.js";
import { renderStateData } from "./table.js";

const VALUES = ['firstName', 'lastName', 'about', 'eyeColor'];

export const createCheckbox = () => {
    const html = checkboxElement();
    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('checkbox');
    document.body.prepend(div);
    selectColumn();
}

function selectColumn() {
    const columnsOptions = document.querySelectorAll('.checkbox input');
    const columnIndexes = [];
    columnsOptions.forEach((input, i) => {
        input.addEventListener('change', (e) => {
            if (input.checked && !columnIndexes.includes(i)) {
                columnIndexes.push(i);
            } else {
                columnIndexes.splice(columnIndexes.indexOf(i), 1);
            }
            filterBySize(columnIndexes);
            renderStateData();
        });
    });
};

function filterBySize(columnIndexes) {

    state.currentData = state.data;
    const keys = columnIndexes.map(i => VALUES[i])
    const newArr = state.currentData.map((el, i) => {
        return Object.entries(el)
            .filter(([key]) => !keys.includes(key))
            .reduce((acc, [key,value]) => ({...acc,[key]:value}), {})
    })
    state.currentData = newArr;
    console.log(state.currentData)
}