let state = {
    data: [],
    currentId: null
};

const createState = (data) => {
    state.data = data.map(el => ({ ...el, firstName: el.name.firstName, lastName: el.name.lastName }));
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
    state.data.sort((a, b) => a[key] > b[key] ? 1 : -1);
};

const getCurrentRow = () => {
    return state.data.find((e) => e.id === state.currentId)
};

export {state, createState, setCurrentId, updateRowData, sortDataByKey, getCurrentRow}