import React from "react";
import {TextInput} from "react-native";
import {tailwind} from "../tailwind";

export const StyledTextInput = ({value, onChangeText}: {value: string, onChangeText: any}) =>
  <TextInput style={tailwind('bg-primary rounded-lg w-2/3 px-3')} value={value} onChangeText={onChangeText}/>


