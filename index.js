import data from "./data.json" assert { type: "json" };

const state = data.map(el => ({ ...el, firstName: el.name.firstName, lastName: el.name.lastName }));

const selectElement = (key) => `
    <select name="options" data-key="${key}" id="select">
        <option value="none">-Выбрать-</option>
        <option value="increase">Сортировка от А до Я</option>
        <option value="decrease">Сортировка от Я до А</option>
        <option value="hide">Скрыть столбец</option>
    </select>`;

const renderData = () => {
    document.querySelector('#tbody').innerHTML =  state.map((el) =>
        `<tr class="row" data-id="${el.id}">
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td class="td_about">${el.about}</td>
        <td>${el.eyeColor}</td>
        </tr>`
    ).join('');
};

const renderTable = () => {
    const html = `
        <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
        <th>Имя ${selectElement('firstName')}</th>
        <th>Фамилия ${selectElement('lastName')}</th>
        <th>Описание ${selectElement('about')}</th>
        <th>Цвет глаз ${selectElement('eyeColor')}</th>
        </thead>
        <tbody id="tbody">
        </tbody>
        </table>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.innerHTML = div.innerHTML;
    renderData();
};

const sortTable = (key) => {
    state.sort((a, b) => a[key] > b[key] ? 1 : -1);
};

const selectsBtns = document.querySelectorAll('#select');

selectsBtns.forEach((el) => el.addEventListener('change', (event) => {
    const key = event.target.getAttribute('data-key');
    const option = event.target.value;
    if (option === 'increase') {
        sortTable(key);
    } else if (option === 'decrease') {
        sortTable(key);
        state.reverse();
    }
    renderData();
}));

const setCurrentId = (id) => {
    state.currentId = id;
};

renderTable();
