import {COUNTER_CHANGE} from "../constants";

export interface IState {
    count: number
}

const initialState: IState = {
    count: 0
}

export const reducer = (state: IState = initialState, action: any): IState => {
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
