import {createdUser} from "../actions/authActions";
import {AppDispatch} from "../ReduxStore";
import {dbCreateUser, fbSignUpUser} from "../firebase/authFunctions";

export const signUpUser = (username: string, password: string, email: string) => async (dispatch: AppDispatch) => {
  console.log('in sign up thunk');
  const authed = await fbSignUpUser(email, password);
  const written = await dbCreateUser(authed.response.user.uid, username);

  dispatch(createdUser(authed.response.user));
}

export const signInUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  console.log('hit sign in thunk');
}
