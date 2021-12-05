import {applyMiddleware, createStore} from "redux";
import { index } from "./reducers";
import thunk from "redux-thunk";

const configureStore = () => {
  return createStore(index, applyMiddleware(thunk));
};

export default configureStore;
