import React from "react";
import {tailwind} from "../tailwind";
import {Text, TouchableOpacity} from "react-native";

export const StyledButton = ({text, action}: {text: string, action: () => void}) => (
  <TouchableOpacity
    style={tailwind("bg-primary p-3 rounded-lg")}
    onPress={action}
    activeOpacity={0.7}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);

