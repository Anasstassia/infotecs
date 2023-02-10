import { setCurrentId, updateRowData, getCurrentRow } from "./state.js";
import {modalTemplate} from './templates.js';
import {renderStateData} from './table.js';

const fillForm = () => {
    const nameInput = document.querySelector('#update-name');
    const surnameInput = document.querySelector('#update-surname');
    const aboutInput = document.querySelector('#update-about');
    const colorInput = document.querySelector('#update-eyeColor');

    const {firstName, lastName, about, eyeColor} = getCurrentRow();

    nameInput.value = firstName;
    surnameInput.value = lastName;
    aboutInput.value = about;
    colorInput.value = eyeColor;
};


const applyModalEventListeners = () => {
    const editForm = document.querySelector('#edit');
    const tBody = document.querySelector('#tbody');
    const favDialog = document.querySelector('#favDialog');
    const closeButton = favDialog.querySelector('#close');
    const saveButton = favDialog.querySelector('#save');

    tBody.addEventListener('click', (event) => {
        const idRow = event.target.parentNode.getAttribute('data-id');
        favDialog.showModal();
        setCurrentId(idRow);
        fillForm();
    });

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

const createEditForm = () => {
    const template = modalTemplate();
    const div = document.createElement('div');
    div.innerHTML = template;
    document.body.append(div);
};

export { applyModalEventListeners, createEditForm }