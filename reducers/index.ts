import {COUNTER_CHANGE, SIGN_UP, SIGN_IN, SIGN_IN_FAIL, SIGN_UP_FAIL} from "../constants/ReduxActions";

interface IState {
  count: number;
  user: {} | null,
  signInFail: boolean,
}

const initialState: IState = {
  count: 0,
  user: null,
  signInFail: false,
};

export const index = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };

    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user
      }

    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        signInFail: false
      }

    case SIGN_IN_FAIL:
      return {
        ...state,
        signInFail: true
      }

    case SIGN_UP_FAIL:
    default:
      return state;
  }
};
