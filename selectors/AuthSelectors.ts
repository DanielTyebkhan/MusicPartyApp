import {RootState} from "../ReduxStore";

export const isLoggedIn = (state: RootState): boolean => state.user !== null && state.user !== undefined;
