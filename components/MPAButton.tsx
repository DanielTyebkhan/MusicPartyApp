import React from "react";
import tailwind from "tailwind-rn";
import {Text, TouchableOpacity} from "react-native";

export const MPAButton = ({text, action}: {text: string, action: () => void}) => (
  <TouchableOpacity
    style={tailwind("bg-blue-800 p-3 rounded-lg mt-5")}
    onPress={action}
    activeOpacity={0.7}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);

