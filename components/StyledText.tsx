import React from "react";
import {Text} from "react-native";
import {tailwind} from "../tailwind";

const StyledText = ({children}: any) => (
  <Text style={tailwind('text-beige')}>
    {children}
  </Text>
);

export default StyledText;
