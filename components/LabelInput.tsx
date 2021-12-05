import React from "react";
import {View} from "react-native";
import {tailwind} from "../tailwind";
import {StyledText} from "./StyledText";
import {StyledTextInput} from "./StyledTextInput";

interface LabelInputProps {
  labelText: string,
  inputValue: string,
  onChangeInput: (input: string) => void
}

export const LabelInput = ({labelText, inputValue, onChangeInput}: LabelInputProps) => (
  <View style={tailwind("items-center w-full")}>
    <StyledText>
      {labelText}
    </StyledText>
    <StyledTextInput value={inputValue} onChangeText={onChangeInput}/>
  </View>
);
