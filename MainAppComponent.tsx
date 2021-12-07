import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {HOME_SCREEN, SIGN_IN, SIGN_UP} from "./constants/Navigation";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {SignInScreen} from "./screens/SignInScreen";
import {SignUpScreen} from "./screens/SignUpScreen";
import {isLoggedIn} from "./selectors/AuthSelectors";
import {useStore} from "react-redux";
import {RootState} from "./ReduxStore";

const Drawer = createDrawerNavigator();

export const MainAppComponent = () => {
  const store: RootState = useStore();

  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerStatusBarHeight: 30}} initialRouteName={HOME_SCREEN}>
          <Drawer.Screen name={HOME_SCREEN} component={HomeScreen}/>
          <Drawer.Screen name={SIGN_IN} component={SignInScreen} options={{drawerItemStyle: {display: isLoggedIn(store) ? "none" : "flex"}}}/>
          <Drawer.Screen name={SIGN_UP} component={SignUpScreen} options={{drawerItemStyle: {display: "none"}}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

