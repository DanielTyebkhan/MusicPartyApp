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

const Stack = createNativeStackNavigator();

const MainAppComponent = () => {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state: any) => ({
    count: state.count,
});

const ActionCreators = Object.assign(
    {},
    changeCount,
);

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainAppComponent);
