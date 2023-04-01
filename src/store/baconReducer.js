const defaultApi = {
    recipeJSON: [], // массивы разных форматов данных
    recipeTEXT: [],
    recipeHTML: [],
    formatData: '',
    formatDataSet: new Set()
};

const ADD_BACON = 'ADD_BACON';
const SET_FORMAT_DATA = 'SET_FORMAT_DATA';
const ADD_FORMAT_DATA_SET = 'ADD_FORMAT_DATA_SET';

//Redux для хранения данных нескольких запросов
export const baconReducer = (state = defaultApi, action) => {
    switch (action.type) {
        case ADD_BACON:{
            if(state.formatData === 'json' || state.formatData==='')
                return {...state, recipeJSON: [...state.recipeJSON, ...action.payload]};
            else if(state.formatData === 'text')
                return {...state, recipeTEXT: [...state.recipeTEXT, ...action.payload.split('\n')]};
            else
                return {...state, recipeHTML: [...state.recipeHTML, action.payload]};
        }
        case SET_FORMAT_DATA: {
            return {...state, formatData: action.payload}
        }
        case ADD_FORMAT_DATA_SET:{
            return {...state, formatDataSet: state.formatDataSet.add(action.payload.toLocaleUpperCase()) }
        }
        default: return state
    }
};

export const addRecipe = (payload) => ({type: ADD_BACON, payload});
export const setFormatData = (payload) => ({type: SET_FORMAT_DATA, payload});
export const addFormatDataSet = (payload) => ({type: ADD_FORMAT_DATA_SET, payload});