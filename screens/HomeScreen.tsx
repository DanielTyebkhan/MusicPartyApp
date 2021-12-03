import tailwind from "tailwind-rn";
import {TouchableOpacity, View, Text} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {COUNTER_CHANGE} from "../constants";
import {IState} from "../reducers/reducer";

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const count = useSelector((store: IState) => store.count)
    const setCount = (newCount: number) => dispatch({type: COUNTER_CHANGE, payload: newCount});
    return (
        <View style={tailwind("bg-black flex justify-center items-center h-full")}>
            <Text style={tailwind("text-white")}>{count}</Text>
            <View style={tailwind('flex-row')}>
                <TouchableOpacity style={tailwind('bg-blue-800 p-3 rounded-lg mt-5')} onPress={() => setCount(count-1)}>
                    <Text style={tailwind('text-white')}>Decrease</Text>
                </TouchableOpacity>
                <View style={tailwind('m-2')}/>
                <TouchableOpacity style={tailwind('bg-blue-800 p-3 rounded-lg mt-5')} onPress={() => setCount(count+1)}>
                    <Text style={tailwind('text-white')}>Increase</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
