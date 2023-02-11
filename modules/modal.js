import { setCurrentId, updateRowData, getCurrentRow } from "./state.js";
import {modalTemplate} from './templates.js';
import {renderStateData} from './table.js';

// заполнение формы редактирования данными из выбранной строки
const fillForm = () => {
    const nameInput = document.querySelector('#update-name');
    const surnameInput = document.querySelector('#update-surname');
    const aboutInput = document.querySelector('#update-about');
    const colorInput = document.querySelector('#update-eyeColor');

    // получение полей объекта выбранной строки с помощью деструкторизации 
    const {firstName, lastName, about, eyeColor} = getCurrentRow(); 
    nameInput.value = firstName;
    surnameInput.value = lastName;
    aboutInput.value = about;
    colorInput.value = eyeColor;
};

// функция добавляет слушатели событий на строки и форму редактирования(модального окна) для взаимодействия с ними
const applyModalEventListeners = () => {
    const editForm = document.querySelector('#edit');
    const tBody = document.querySelector('#tbody');
    const favDialog = document.querySelector('#favDialog');
    const closeButton = favDialog.querySelector('#close');
    const saveButton = favDialog.querySelector('#save');

    // использование делегирования событий для выбора строки пользователем
    // при нажатии на тело таблицы, отображается диалоговое окно (html-элемент <dialog>)
    tBody.addEventListener('click', (event) => {
        const idRow = event.target.parentNode.getAttribute('data-id'); // получение идентификатора выбранной строки по атрибуту (<tr> является родителем <td>)
        favDialog.showModal(); // отображение модального окна
        setCurrentId(idRow); // запись в стейт идентификатора выбранной строки
        fillForm();
    });

    // при сохранении изменений данных в модальном окне, обновляется стейт данных и перерисовывается таблица
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameValue = document.querySelector('#update-name')?.value;
        const lastNameValue = document.querySelector('#update-surname')?.value;
        const aboutValue = document.querySelector('#update-about')?.value;
        const colorValue = document.querySelector('#update-eyeColor')?.value;

        updateRowData(nameValue, lastNameValue, aboutValue, colorValue);
        renderStateData();
    });

    closeButton.addEventListener("click", () => {
        favDialog.close();
    });

    saveButton.addEventListener("click", () => {
      favDialog.close();
    });

};

// создание модального окна с использованием готового шаблона верстки
const createEditForm = () => {
    const template = modalTemplate();
    const div = document.createElement('div');
    div.innerHTML = template;
    document.body.append(div);
};

export { applyModalEventListeners, createEditForm }