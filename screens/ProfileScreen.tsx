import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../ReduxStore";
import {Background} from "../components/Background";
import {StyledButton} from "../components/StyledButton";
import {signOutUser} from "../thunks/authThunks";
import {NormalText} from "../components/StyledText";
import {UserData} from "../types/authTypes";

export const ProfileScreen = () => {
  const {username} = useSelector((state: RootState) => state.user) as UserData;
  const dispatch = useDispatch();

  const spotifySignIn = () => {
    
  }

  return (
    <Background>
      <NormalText>{`${username}'s Profile`}</NormalText>
      <StyledButton text="Sign Out" action={() => dispatch(signOutUser())} />
      <StyledButton text="Sign In With Spotify" action={spotifySignIn} />
    </Background>
  );
}
