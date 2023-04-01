const defaultModalWindow = {
    isLoading: false, // флаг загрузки данных (работы спинера)
    isVieWModal: false, // флаг видимости модального окна
    temporaryData: {
        type: '',
        content: null
    },
    errorMessage: ''
};

const IS_LOADING = 'IS_LOADING';
const IS_VIEW_MW = 'IS_VIEW_MW';
const TEMPORARY_DATA = 'TEMPORARY_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

// Redux состояния модального окна
export const modalWindow = (state = defaultModalWindow, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case IS_VIEW_MW: {
            return {...state, isVieWModal: action.payload}
        }
        case TEMPORARY_DATA: {
            return {...state,
                temporaryData: {
                    type: action.payload.type === '' ? 'json' : action.payload.type,
                    content:  action.payload.type === 'text'
                        ?  action.payload.content.split('\n')
                        :  action.payload.content },
                errorMessage: ''
            }
        }
        case SET_ERROR_MESSAGE: {
            return {...state, errorMessage: action.payload}
        }
        default: return state
    }
};

// Actions
export const setIsLoading = (payload) => ({type: IS_LOADING, payload});
export const setViewModalWindow = (payload) => ({type: IS_VIEW_MW, payload});
export const setTemporaryData = (payload) => ({type: TEMPORARY_DATA, payload});
export const setErrorMessage = (payload) => ({type: SET_ERROR_MESSAGE, payload});
