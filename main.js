import {
    createState, 
    createTable,
    createEditForm,
    createCheckbox,
    applyButtonsEventListeners,
    applyModalEventListeners
} from "@modules";
import data from './data.json' assert {type: 'json'};

createState(data);
createTable();
createCheckbox();
createEditForm();
applyButtonsEventListeners();
applyModalEventListeners();