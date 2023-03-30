const defaultModalWindow = {
    isLoading: false,
    isVieWModal: false,
    temporaryData: {
        type: '',
        content: null
    }
};

const IS_LOADING = 'IS_LOADING';
const IS_VIEW_MW = 'IS_VIEW_MW';
const TEMPORARY_DATA = 'TEMPORARY_DATA';


export const modalWindow = (state = defaultModalWindow, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case IS_VIEW_MW: {
            return {...state, isVieWModal: action.payload}
        }
        case TEMPORARY_DATA: {
            return {...state, temporaryData: {
                    type: action.payload.type === '' ? 'json' : action.payload.type,
                    content: action.payload.content
                }}
        }
        default: return state
    }
};


export const setIsLoading = (payload) => ({type: IS_LOADING, payload});
export const setViewModalWindow = (payload) => ({type: IS_VIEW_MW, payload});
export const setTemporaryData = (payload) => ({type: TEMPORARY_DATA, payload});
