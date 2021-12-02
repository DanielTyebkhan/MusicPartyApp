import tailwind from "tailwind-rn";
import {TouchableOpacity, View, Text} from "react-native";
import {useState} from "react";
import React from "react";

export const HomeScreen = () => {
    const [count, setCount] = useState(0);
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
