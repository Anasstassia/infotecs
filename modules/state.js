let state = {
    data: [],
    currentData: [],
    currentId: null,
    hideColumns: []
};

const createState = (data) => {
    state.data = data.map(el => ({ ...el, firstName: el.name.firstName, lastName: el.name.lastName }));
    state.currentData = state.data;
};

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
    state.currentData.sort((a, b) => a[key] > b[key] ? 1 : -1);
};

const getCurrentRow = () => {
    return state.data.find((e) => e.id === state.currentId)
};

export {state, createState, setCurrentId, updateRowData, sortDataByKey, getCurrentRow}