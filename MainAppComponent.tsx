import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import LoginInScreen from "./screens/LoginInScreen";
import {HOME_SCREEN, LOGIN} from "./constants/Navigation";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MainAppComponent = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerStatusBarHeight: 30}} initialRouteName={HOME_SCREEN}>
          <Drawer.Screen name={HOME_SCREEN} component={HomeScreen}/>
          <Drawer.Screen name={LOGIN} component={LoginInScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainAppComponent;
