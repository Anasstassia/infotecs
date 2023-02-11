import { COLORS } from './constants.js';

//хранение шаблонов верстки для удобного использования
const checkboxElement = () => `
    <form>
       <p>Выберите, какие столбцы скрыть</p>
        <label>
            <input type="checkbox" value="firstName">
            Имя
        </label>
        <label>
            <input type="checkbox" value="lastName">
            Фамилия
        </label>
        <label>
            <input type="checkbox" value="about">
            Описание
        </label>
        <label>
            <input type="checkbox" value="eyeColor">
            Цвет глаз
        </label>
    </form>`;

const selectElementTemplate = (key) => `
    <select name="options" data-key="${key}" id="select">
        <option value="none">-Выбрать-</option>
        <option value="increase">Сортировка от А до Я</option>
        <option value="decrease">Сортировка от Я до А</option>
    </select>`;

const tableRowTemplate = (el) => `<tr class="row" data-id="${el.id}">
        <td data-key="firstName">${el.firstName}</td>
        <td data-key="lastName">${el.lastName}</td>
        <td class="td_about col" data-key="about">${el.about}</td>
        <td data-key="eyeColor">${el.eyeColor}<div style="background-color:${COLORS[el.eyeColor]}"class="color"></div></td>
        </tr>`;

const tableBodyTemplate = () => `
        <table class="table" cellspacing="0" border="0" cellpadding="0">
            <thead>
                <th class="firstName">Имя ${selectElementTemplate('firstName')}</th>
                <th class="lastName">Фамилия ${selectElementTemplate('lastName')}</th>
                <th class="about">Описание ${selectElementTemplate('about')}</th>
                <th class="eyeColor">Цвет глаз ${selectElementTemplate('eyeColor')}</th>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>`;

const modalTemplate = () => `
    <dialog id="favDialog">
        <div class="form">
            <form method="dialog" class="edit-form" id="edit">
                <div>
                    <input class="form-input" placeholder="Имя" id="update-name"></input>
                    <input class="form-input" placeholder="Фамилия" id="update-surname"></input>
                    <input class="form-input" placeholder="Описание" id="update-about"></input>
                    <input class="form-input" placeholder="Цвет глаз" id="update-eyeColor"></input>
                </div>
                <div>
                    <button class="btn" id="close" value="cancel">Отменить</button>
                    <button class="btn" id="save" value="default" type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    </dialog>`;

export { tableBodyTemplate, tableRowTemplate, modalTemplate, checkboxElement }