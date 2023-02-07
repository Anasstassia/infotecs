import { ROWS_PER_PAGE } from "./constants.js";

let state = {
    data: [],
    currentData: [],
    currentId: null
};

const createState = (data) => {
    state.data = data.map(el => ({ ...el, firstName: el.name.firstName, lastName: el.name.lastName }));
    state.currentData = state.data;
};
// const stateChunks = state.data.reduce(
//     (acc, el) => {
//         if (acc[acc.length - 1].length === ROWS_PER_PAGE) {
//                 acc.push([el]);
//             return acc;
//         }
//         acc[acc.length - 1].push(el);
//         return acc;
//     }, [[]]
// );
    // return stateChunks?.[currentPage - 1]?.map((car) => renderCar(car)).join('');

const setCurrentId = (id) => {
    state.currentId = id;
};

const updateRowData = (firstName, lastName, about, eyeColor) => {
    state.data.forEach((el,id) => {
        if (el.id === state.currentId) {
            state.data[id] = {...el, firstName, lastName, about, eyeColor}
        }
    });
};

const sortDataByKey = (key) => {
    state.data.sort((a, b) => a[key] > b[key] ? 1 : -1);
};

const getCurrentRow = () => {
    return state.data.find((e) => e.id === state.currentId)
};

export {state, createState, setCurrentId, updateRowData, sortDataByKey, getCurrentRow}