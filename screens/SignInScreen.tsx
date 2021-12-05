import React from "react";
import {SignInSignUpScreen} from "../components/UserPassScreen";
import {SIGN_UP} from "../constants/Navigation";

export const SignInScreen = () =>
  <SignInSignUpScreen navText={{plainText: "Don't have an account?", linkText: "Sign Up."}}
                      navigationRoute={SIGN_UP}/>;

