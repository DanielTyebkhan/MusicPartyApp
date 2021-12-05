import React, {useState} from "react";
import {Background} from "./Background";
import {StyledText} from "./StyledText";
import {LinkText} from "./LinkText";
import {useNavigation} from "@react-navigation/native";
import {LabelInput} from "./LabelInput";

export const UserPassScreen = ({navElement, confirmPassword}: { navElement: any, confirmPassword: boolean }) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  return (
    <Background>
      <LabelInput labelText={"Username:"} inputValue={userNameInput} onChangeInput={setUserNameInput}/>
      <LabelInput labelText={"Password:"} inputValue={passwordInput} onChangeInput={setPasswordInput}/>
      {confirmPassword ?
        <LabelInput labelText={"Confirm Password:"} inputValue={confirmPasswordInput}
                  onChangeInput={setConfirmPasswordInput}/>
        : null}
      {navElement}
    </Background>
  );
};

UserPassScreen.defaultProps = {
  navElement: null,
  confirmPassword: false
}

interface SignInSignUpScreenProps {
  navText: { plainText: string, linkText: string },
  navigationRoute: any,
  confirmPassword: boolean,
}

export const SignInSignUpScreen = ({navText, navigationRoute, confirmPassword}: SignInSignUpScreenProps) => {
  const navigation = useNavigation();
  const NavText = () => (
    <StyledText>
      {navText.plainText} {' '}
      <LinkText text={navText.linkText} action={() => navigation.navigate(navigationRoute)}/>
    </StyledText>
  );

  return <UserPassScreen confirmPassword={confirmPassword} navElement={<NavText/>}/>;
}
