import {CREATED_USER} from "../constants/ReduxActions";

export const createdUser = (user: any) => ({
  type: CREATED_USER,
  payload: {
    user
  }
});
