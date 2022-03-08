import { getValueToken, setValueToken } from "../../Util/util";
import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "./actionTypes";

let initState = getValueToken("todos");

export const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            state = [...state, action.payload];
            setValueToken("todos", JSON.stringify(state));
            return state;
        case DELETE_TODO:
            state = state.filter(({id}) => id !== action.payload);
            setValueToken("todos", JSON.stringify(state));
            return [...state];
        case CHANGE_STATUS:
            state = state.map((item) => item.id === action.payload ? {...item, status: !item.status} : item  );
            setValueToken("todos", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
