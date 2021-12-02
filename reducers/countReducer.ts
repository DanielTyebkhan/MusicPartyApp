import {COUNTER_CHANGE} from "../constants";

const initialState = {
    count: 0
}

export const countReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    };
}
