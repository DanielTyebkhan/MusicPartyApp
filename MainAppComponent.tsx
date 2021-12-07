import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {HOME_SCREEN, PROFILE_SCREEN, SIGN_IN_SCREEN, SIGN_UP_SCREEN} from "./constants/Navigation";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {SignInScreen} from "./screens/SignInScreen";
import {SignUpScreen} from "./screens/SignUpScreen";
import {isLoggedIn} from "./selectors/AuthSelectors";
import {connect, useSelector, useStore} from "react-redux";
import {RootState} from "./ReduxStore";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileScreen} from "./screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const SignedInStack = (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName={HOME_SCREEN} screenOptions={{headerStatusBarHeight: 30}}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen}/>
      <Drawer.Screen name={PROFILE_SCREEN} component={ProfileScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
);

const SignedOutStack = (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={SIGN_IN_SCREEN} screenOptions={{headerShown: false}}>
      <Drawer.Screen name={SIGN_IN_SCREEN} component={SignInScreen}/>
      <Drawer.Screen name={SIGN_UP_SCREEN} component={SignUpScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export const MainAppComponent = () => {
  const isLoadingComplete = useCachedResources();
  const signedIn = useSelector((state: RootState) => isLoggedIn(state));
  if (!isLoadingComplete) {
    return null;
  } else {
    if (signedIn)
      return SignedInStack;
    else
      return SignedOutStack;
  }
}
