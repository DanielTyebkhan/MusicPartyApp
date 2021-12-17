import {SIGN_UP, SIGN_IN, SIGN_IN_FAIL, SIGN_UP_FAIL, SIGN_OUT, SIGN_OUT_FAIL} from "../constants/ReduxActions";
import {UserData} from "../types/authTypes";

interface IState {
  count: number;
  user?: UserData,
  signInFail: boolean,
  signUpFail: boolean,
}

const initialState: IState = {
  count: 0,
  signInFail: false,
  signUpFail: false,
};

export const index = (state: IState = initialState, action: any): IState => {
  console.log(action.type);
  switch (action.type) {
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

    case SIGN_OUT:
      return {
        ...state,
        user: undefined
      }

    case SIGN_UP:
      return {
        ...state,
        signUpFail: false
      }

    case SIGN_UP_FAIL:
      return {
        ...state,
        signUpFail: true
      }

    default:
      return state;
  }
};
