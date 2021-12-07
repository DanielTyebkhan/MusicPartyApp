import {SIGN_UP, SIGN_IN, SIGN_IN_FAIL, SIGN_UP_FAIL} from "../constants/ReduxActions";
import {UserInfo} from "../types/authTypes";

interface IState {
  count: number;
  user?: UserInfo,
  signInFail: boolean,
}

const initialState: IState = {
  count: 0,
  signInFail: false,
};

export const index = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user
      }

    case SIGN_IN:
      console.log('logged in')
      return {
        ...state,
        user: action.payload.user,
        signInFail: false
      }

    case SIGN_IN_FAIL:
      console.log('failed login')
      return {
        ...state,
        signInFail: true
      }

    case SIGN_UP_FAIL:
    default:
      return state;
  }
};
