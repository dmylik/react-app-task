import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {baconReducer} from "./baconReducer.js";
import {modalWindow} from "./modalWindow.js";

// сборщик Reducers
const  rootReducer = combineReducers({
    modal: modalWindow,
    bacon: baconReducer
});

export const  store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) ;