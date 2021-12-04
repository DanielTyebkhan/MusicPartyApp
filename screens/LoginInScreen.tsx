import React, {useState} from "react";
import Background from "../components/Background";
import StyledText from "../components/StyledText";
import StyledTextInput from "../components/StyledTextInput";

const LoginInScreen = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  return (
    <Background>
      <StyledText>
        Username:
      </StyledText>
      <StyledTextInput value={userNameInput} onChangeText={setUserNameInput}/>
      <StyledText>
        Password:
      </StyledText>
      <StyledTextInput value={passwordInput} onChangeText={setPasswordInput}/>
    </Background>
  );
};

export default LoginInScreen;
