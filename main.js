import {
    createState, 
    createTable,
    createEditForm,
    applyButtonsEventListeners,
    applyModalEventListeners
} from "@modules";
import data from './data.json' assert {type: 'json'};

createState(data);
createTable();
createEditForm();
applyButtonsEventListeners();
applyModalEventListeners();