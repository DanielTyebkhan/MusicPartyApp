import tailwind from "tailwind-rn";
import {View, Text, TextInput, FlatList} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {COUNTER_CHANGE} from "../constants";
import {IState} from "../reducers/reducer";
import {MPAButton} from "../components/MPAButton";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector((store: IState) => store.count);

  const [text, changeText] = useState("");
  const [songs, setSongs] = useState([] as string[]);

  const setCount = (newCount: number) =>
    dispatch({type: COUNTER_CHANGE, payload: newCount});

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

  const trackNameComp = ({item}) => {
    console.log(item);
    return (
      <Text>{item}</Text>
    );
  }

  return (
    <View style={tailwind("bg-black flex justify-center items-center h-full")}>
      <TextInput
        style={tailwind("bg-red-800")}
        value={text}
        onChangeText={changeText}
      />
      <MPAButton text={"Get Top Songs"} action={updateSongs}/>
      <View style={tailwind("m-2")}/>
      <FlatList style={tailwind("bg-red-800 flex-grow-0")} data={songs} renderItem={trackNameComp}
                keyExtractor={(item, index) => index}/>
      <View style={tailwind("m-2")}/>
      <Text style={tailwind("text-white")}>{count}</Text>
      <View style={tailwind("flex-row")}>
        <MPAButton text={"Decrease"} action={() => setCount(count - 1)}/>
        <View style={tailwind("m-2")}/>
        <MPAButton text={"Increase"} action={() => setCount(count + 1)}/>
      </View>
    </View>
  );
};
