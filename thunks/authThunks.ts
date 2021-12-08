import {
  signedInUserEvent,
  signedOutUserEvent,
  signInFailEvent, signOutFailEvent,
  signUpEvent,
  signUpFailEvent
} from "../actions/authActions";
import {AppDispatch} from "../ReduxStore";
import {dbWriteUser, fbLogInUser, fbLogOutUser, fbSignUpUser} from "../firebase/authFunctions";

export const signUpUser = (username: string, password: string, email: string) => async (dispatch: AppDispatch) => {
  // TODO: Figure out what to do if account creation is possible but db fails writing
  const authed = await fbSignUpUser(email, password);
  if (authed.success) {
    const written = await dbWriteUser(authed.response.uid, username);
    if (written.success) {
      const uid = authed.response.uid;
      dispatch(signUpEvent(uid));
      dispatch(signedInUserEvent({uid, username}));
      return;
    }
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
  } else {
    dispatch(signOutFailEvent());
  }
}
