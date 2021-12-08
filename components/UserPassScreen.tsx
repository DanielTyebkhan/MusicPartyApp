import React, {useState} from "react";
import {Background} from "./Background";
import {ErrorText, NormalText} from "./StyledText";
import {LinkText} from "./LinkText";
import {useNavigation} from "@react-navigation/native";
import {LabelInput} from "./LabelInput";
import {StyledButton} from "./StyledButton";
import {fbLogInUser} from "../firebase/authFunctions";
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

  const passwordsMatching = () => askConfirmPassword && passwordInput == confirmPasswordInput;

  const onSubmit = () => {
    if (askConfirmPassword && !passwordsMatching())
      return;
    submitAction(userNameInput, emailInput, passwordInput);
  }

  const showOrNull = (show: boolean, component: JSX.Element) => show ? component : null;

  return (
    <Background>
      {showOrNull(askUsername, <LabelInput labelText={"Username:"} inputValue={userNameInput} onChangeInput={setUserNameInput}/>)}
      {showOrNull(askEmail, <LabelInput labelText={"Email:"} inputValue={emailInput} onChangeInput={setEmailInput}/>)}
      <LabelInput labelText={"Password:"} inputValue={passwordInput} onChangeInput={setPasswordInput}/>
      {showOrNull(askConfirmPassword,
        <LabelInput labelText={"Confirm Password:"} inputValue={confirmPasswordInput}
                    onChangeInput={setConfirmPasswordInput}/>)}
      {showOrNull(askConfirmPassword && !passwordsMatching(), <ErrorText>Passwords do not match</ErrorText>)}
      <View style={tailwind("mt-3")}/>
      <StyledButton text={"Submit"} action={onSubmit}/>
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
    <NormalText>
      {navText.plainText} {' '}
      <LinkText text={navText.linkText} action={() => navigation.navigate(navigationRoute)}/>
    </NormalText>
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
