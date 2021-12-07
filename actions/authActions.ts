import {SIGN_IN_FAIL, SIGN_UP, SIGN_IN, SIGN_UP_FAIL} from "../constants/ReduxActions";

export const signUpEvent = (user: any) => ({
  type: SIGN_UP,
  payload: {
    user
  }
})

export const signUpFailEvent = () => ({
  type: SIGN_UP_FAIL,
})

export const signedInUserEvent = (user: any) => ({
  type: SIGN_IN,
  payload: {
    user
  }
})

export const signInFailEvent = () => ({
  type: SIGN_IN_FAIL
})
