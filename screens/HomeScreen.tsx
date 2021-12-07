import {View, Text, FlatList} from "react-native";
import React, {useState} from "react";
import {StyledButton} from "../components/StyledButton";
import {tailwind} from "../tailwind";
import { Background } from "../components/Background";
import { StyledTextInput } from "../components/StyledTextInput";

export const HomeScreen = () => {
  const [text, changeText] = useState("");
  const [songs, setSongs] = useState([] as string[]);

  const getLastSongs = async (oauth: string): Promise<string[]> => {
    const url = "https://api.spotify.com/v1/me/player/recently-played";
    const headers = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${oauth}`,
        "Content-Type": "application/json",

      }
    };
    const resp = await fetch(url, headers);
    const json = await resp.json();
    const names = json.items.map((item: { track: { name: string } }) => item.track.name);
    return names;
  }

  const updateSongs = async (): Promise<void> => {
    const songs = await getLastSongs(text);
    setSongs(songs);
  }

  const trackNameComp = ({item}: {item: string}) => <Text>{item}</Text>;

  return (
    <Background>
      <StyledTextInput value={text} onChangeText={changeText} />
      <StyledButton text={"Get Top Songs"} action={updateSongs}/>
      <View style={tailwind("m-2")}/>
      <FlatList style={tailwind("bg-red-800 flex-grow-0")} data={songs} renderItem={trackNameComp}/>
      <View style={tailwind("m-2")}/>
    </Background>
  );
};
