import {COUNTER_CHANGE, CREATED_USER} from "../constants/ReduxActions";

export interface IState {
  count: number;
  currentUser: {} | null,
}

const initialState: IState = {
  count: 0,
  currentUser: null,
};

export const index = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    case CREATED_USER:
      return {
        ...state,
        currentUser: action.payload.user
      }
    default:
      return state;
  }
};
