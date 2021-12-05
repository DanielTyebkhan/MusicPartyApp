import {createdUser} from "../actions/authActions";
import {AppDispatch} from "../ReduxStore";

export const signUpUser = (userName: string, password: string, email: string) => async (dispatch: AppDispatch) => {
  const created = await 'create firebase user (email, password).then(addUsername)';
  dispatch(createdUser(userName, created));
}
