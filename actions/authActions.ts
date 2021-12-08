import {SIGN_IN_FAIL, SIGN_UP, SIGN_IN, SIGN_UP_FAIL, SIGN_OUT, SIGN_OUT_FAIL} from "../constants/ReduxActions";
import {UserData} from "../types/authTypes";

export const signUpEvent = (user: any) => ({
  type: SIGN_UP,
  payload: {
    user
  }
})

export const signUpFailEvent = () => ({
  type: SIGN_UP_FAIL,
})

export const signedInUserEvent = (user: UserData) => ({
  type: SIGN_IN,
  payload: {
    user
  }
})

export const signInFailEvent = () => ({
  type: SIGN_IN_FAIL
})

export const signedOutUserEvent = () => ({
  type: SIGN_OUT
})

export const signOutFailEvent = () => ({
  type: SIGN_OUT_FAIL
})
