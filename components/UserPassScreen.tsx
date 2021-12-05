import React, {useState} from "react";
import {Background} from "./Background";
import {StyledText} from "./StyledText";
import {LinkText} from "./LinkText";
import {useNavigation} from "@react-navigation/native";
import {LabelInput} from "./LabelInput";
import {StyledButton} from "./StyledButton";
import {dbLogInUser} from "../firebase/authFunctions";
import {signInUser, signUpUser} from "../thunks/authThunks";
import {tailwind} from "../tailwind";
import {View} from "react-native";
import {useDispatch} from "react-redux";

export const UserPassScreen = ({
                                 navElement,
                                 askConfirmPassword,
                                 askUsername,
                                 askEmail,
                                 submitAction
                               }: UserPassScreenProps) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  return (
    <Background>
      {askUsername ?
        <LabelInput labelText={"Username:"} inputValue={userNameInput} onChangeInput={setUserNameInput}/> : null}
      {askEmail ?
        <LabelInput labelText={"Email:"} inputValue={emailInput} onChangeInput={setEmailInput}/> : null}
      <LabelInput labelText={"Password:"} inputValue={passwordInput} onChangeInput={setPasswordInput}/>
      {askConfirmPassword ?
        <LabelInput labelText={"Confirm Password:"} inputValue={confirmPasswordInput}
                    onChangeInput={setConfirmPasswordInput}/> : null}
      <View style={tailwind("mt-3")}/>
      <StyledButton text={"Submit"} action={() => submitAction(userNameInput, emailInput, passwordInput)}/>
      {navElement}
    </Background>
  );
};

interface UserPassScreenProps {
  navElement: any,
  askUsername: boolean,
  askEmail: boolean,
  askConfirmPassword: boolean,
  submitAction: (username: string, email: string, password: string) => void,
}

UserPassScreen.defaultProps = {
  navElement: null,
  askConfirmPassword: false,
  askUsername: false,
  askEmail: false,
}

export const SignInSignUpScreen = ({navText, navigationRoute, signIn}: SignInSignUpScreenProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const NavText = () => (
    <StyledText>
      {navText.plainText} {' '}
      <LinkText text={navText.linkText} action={() => navigation.navigate(navigationRoute)}/>
    </StyledText>
  );
  const signInFunc = (username: string, email: string, password: string) => dispatch(signInUser(email, password));
  const signUpFunc = (username: string, email: string, password: string) => dispatch(signUpUser(username, password, email));
  return <UserPassScreen submitAction={signIn ? signInFunc : signUpFunc}
                         askConfirmPassword={!signIn} askEmail={true} askUsername={!signIn} navElement={<NavText/>}/>;
}

interface SignInSignUpScreenProps {
  navText: { plainText: string, linkText: string },
  navigationRoute: any,
  signIn: boolean
}
