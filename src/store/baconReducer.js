const defaultApi = {
    recipeJSON: [],
    recipeTEXT: [],
    recipeHTML: [],
    formatData: ''
};

const ADD_BACON = 'ADD_BACON';
const SET_FORMAT_DATA = 'SET_FORMAT_DATA';

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
        default: return state
    }
};

export const addRecipe = (payload) => ({type: ADD_BACON, payload});
export const setFormatData = (payload) => ({type: SET_FORMAT_DATA, payload});