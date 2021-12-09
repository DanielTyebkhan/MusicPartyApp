import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../ReduxStore";
import {Background} from "../components/Background";
import {StyledButton} from "../components/StyledButton";
import {signOutUser} from "../thunks/authThunks";
import {NormalText} from "../components/StyledText";
import {UserData} from "../types/authTypes";
import {OAuthConfig, spotifyConfig} from "../oauth/oauthConfigs";
import {AuthRequest, makeRedirectUri} from "expo-auth-session";

export const ProfileScreen = () => {
  const {username} = useSelector((state: RootState) => state.user) as UserData;
  const dispatch = useDispatch();

  const loginOAuth = async (authConfig: OAuthConfig) => {
    const request = new AuthRequest(authConfig.config);
    const response = await request.promptAsync(authConfig.discovery);
    console.log(response);
  }

  return (
    <Background>
      <NormalText>{`${username}'s Profile`}</NormalText>
      <StyledButton text="Sign Out" action={() => dispatch(signOutUser())} />
      <StyledButton text="Sign In With Spotify" action={() => loginOAuth(spotifyConfig(makeRedirectUri()))} />
    </Background>
  );
}
