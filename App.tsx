import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./screens/HomeScreen";
import {connect, Provider} from "react-redux";
import configureStore from "./configureStore";
import {changeCount} from "./actions/counts";
import {bindActionCreators} from "redux";
import MainAppComponent from "./MainAppComponent";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <MainAppComponent/>
    </Provider>
);

export default App;

