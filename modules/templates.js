const selectElementTemplate = (key) => `
    <select name="options" data-key="${key}" id="select">
        <option value="none">-Выбрать-</option>
        <option value="increase">Сортировка от А до Я</option>
        <option value="decrease">Сортировка от Я до А</option>
        <option value="hide">Скрыть столбец</option>
    </select>`;


const tableRowTemplate = (el) => `<tr class="row" data-id="${el.id}">
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td class="td_about col">${el.about}</td>
        <td>${el.eyeColor}</td>
        </tr>`

const tableBodyTemplate = () => `
        <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
        <th>Имя ${selectElementTemplate('firstName')}</th>
        <th>Фамилия ${selectElementTemplate('lastName')}</th>
        <th>Описание ${selectElementTemplate('about')}</th>
        <th>Цвет глаз ${selectElementTemplate('eyeColor')}</th>
        </thead>
        <tbody id="tbody">
        </tbody>
        </table>
    `

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
    </dialog>`

export {tableBodyTemplate, tableRowTemplate, modalTemplate}