import React from "react";

import { Provider } from "react-redux";
import {MainAppComponent} from "./MainAppComponent";
import {store} from "./ReduxStore";


const App = () => (
  <Provider store={store}>
    <MainAppComponent />
  </Provider>
);

export default App;
