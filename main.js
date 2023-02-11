import {
    createState, 
    createTable,
    createEditForm,
    createCheckbox,
    applyButtonsEventListeners,
    applyModalEventListeners
} from "./modules/index.js";

import data from './data.json' assert {type: 'json'};

/* инициализация состояния приложения, создание основных элементов интерфейса
 и навешивание слушателей событий на элементы */
createState(data);
createTable();
createCheckbox();
createEditForm();
applyButtonsEventListeners();
applyModalEventListeners();