import React from "react";
import {tailwind} from "../tailwind";
import {View} from "react-native";

const Background = ({children}: {children: any}) => (
  <View style={tailwind("bg-secondary flex justify-center items-center h-full")}>
    {children}
  </View>
);

export default Background;

