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

const renderEditForm = () => {
    const html1 = `
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

    const div = document.createElement('div');
    div.innerHTML = html1;
    document.body.append(div);

    const tBody = document.querySelector('#tbody');
    const favDialog = document.getElementById('favDialog');
    const closeButton = favDialog.querySelector('#close');
    const saveButton = favDialog.querySelector('#save');


    tBody.addEventListener('click', (event) => {
        const idRow = event.target.parentNode.getAttribute('data-id');
        favDialog.showModal();
        setCurrentId(idRow);
        fillForm();
    });


      closeButton.addEventListener("click", () => {
        favDialog.close("animalNotChosen");
    });

      saveButton.addEventListener("click", () => {
      favDialog.close("animalNotChosen");
    });
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
