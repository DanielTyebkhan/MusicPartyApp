import React from "react";
import {Text} from "react-native";
import {tailwind} from "../tailwind";

const StyledText = ({children, color}: {children: any, color: string}) => (
  <Text style={tailwind(`text-${color}`)}>
    {children}
  </Text>
);

export const NormalText = ({children}: any) => <StyledText color={'beige'}>{children}</StyledText>;

export const ErrorText = ({children}: any) => <StyledText color={'red-800'}>{children}</StyledText>;


