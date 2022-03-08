import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/reducer";
import { todoReducer } from "./TodoReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));