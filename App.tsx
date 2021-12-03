import React from "react";

import { Provider } from "react-redux";
import configureStore from "./configureStore";
import MainAppComponent from "./MainAppComponent";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MainAppComponent />
  </Provider>
);

export default App;
