import { checkboxElement } from "./templates.js";
import { state } from "./state.js";
import { renderStateData } from "./table.js";

// создание блока с чекбоксами для скрытия колонок
const createCheckbox = () => {
    const html = checkboxElement();
    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('checkbox');
    document.body.prepend(div);
    selectColumn();
};

/* функция, которая при выборе нужной колонки, формирует массив индексов скрытых колонок
и на этой основе перерисовывает таблицу */ 
function selectColumn() {
    const columnsOptions = document.querySelectorAll('.checkbox input');
    columnsOptions.forEach((input, i) => {
        input.addEventListener('change', (e) => {
            if (input.checked && !state.hideColumns.includes(i)) {
                state.hideColumns.push(i);
            } else {
                state.hideColumns.splice(state.hideColumns.indexOf(i), 1);
            }
            renderStateData();
        });
    });
};

export { createCheckbox }