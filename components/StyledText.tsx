import React from "react";
import {Text} from "react-native";
import {tailwind} from "../tailwind";

export const StyledText = ({children}: any) => (
  <Text style={tailwind('text-beige')}>
    {children}
  </Text>
);

