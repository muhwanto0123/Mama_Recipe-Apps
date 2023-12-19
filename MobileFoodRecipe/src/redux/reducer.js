import { GET_FOOD } from "./action";

const initialState = {
    name: '',
    age: 0,
    food: [],
}

function userReducer(state = initialState, action){
    switch (action.type){
        case GET_FOOD:
            return {...state, food: action.payload}
        default:
            return state
    }
}

export default userReducer;