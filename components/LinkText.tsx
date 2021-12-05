import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {tailwind} from "../tailwind";

export const LinkText = ({text, action}: { text: string, action: () => void }) => (
  <TouchableOpacity onPress={action}>
    <Text style={tailwind("text-link underline")}>{text}</Text>
  </TouchableOpacity>
);

