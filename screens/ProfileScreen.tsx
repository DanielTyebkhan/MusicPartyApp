import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../ReduxStore";
import {Background} from "../components/Background";
import {StyledButton} from "../components/StyledButton";
import {signOutUser} from "../thunks/authThunks";
import {StyledText} from "../components/StyledText";
import {UserData} from "../types/authTypes";

export const ProfileScreen = () => {
  const {username} = useSelector((state: RootState) => state.user) as UserData;
  const dispatch = useDispatch();
  return (
    <Background>
      <StyledText>{`${username}'s Profile`}</StyledText>
      <StyledButton text="Sign Out" action={() => dispatch(signOutUser())} />
    </Background>
  );
}
