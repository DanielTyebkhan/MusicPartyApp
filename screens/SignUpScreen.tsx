import React from "react";
import {SignInSignUpScreen} from "../components/UserPassScreen";
import {SIGN_IN} from "../constants/Navigation";

export const SignUpScreen = () =>
  <SignInSignUpScreen navText={{plainText: "Already have an account?", linkText: "Sign In."}}
                      navigationRoute={SIGN_IN} confirmPassword={true}/>;

