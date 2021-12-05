import {CREATED_USER} from "../constants/ReduxActions";

export const createdUser = (userName: string, userId: string) => ({
  type: CREATED_USER,
  payload: {
    userName,
    userId
  }
});
