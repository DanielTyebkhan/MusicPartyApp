import {
  signedInUserEvent,
  signedOutUserEvent,
  signInFailEvent,
  signUpEvent,
  signUpFailEvent
} from "../actions/authActions";
import {AppDispatch} from "../ReduxStore";
import {dbWriteUser, fbLogInUser, fbLogOutUser, fbSignUpUser} from "../firebase/authFunctions";

export const signUpUser = (username: string, password: string, email: string) => async (dispatch: AppDispatch) => {
  // TODO: Figure out what to do if account creation is possible but db fails writing
  const authed = await fbSignUpUser(email, password);
  if (authed.success) {
    const written = await dbWriteUser(authed.response.user.uid, username);
    if (written.success)
      dispatch(signUpEvent(authed.response.user));
      return;
  }
  dispatch(signUpFailEvent());
}

export const signInUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  const signedIn = await fbLogInUser(email, password);
  if (signedIn.success) {
    dispatch(signedInUserEvent(signedIn.response));
  } else {
    dispatch(signInFailEvent());
  }
}

export const signOutUser = () => async (dispatch: AppDispatch) => {
  const signedOut = await fbLogOutUser();
  if (signedOut.success) {
    dispatch(signedOutUserEvent());
  }
}
