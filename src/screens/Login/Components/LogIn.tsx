import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

    const { navigate } = useNavigation();
    const [show, setShow] = useState(true)

    const renderUserName = () => {
        return (
            <View>
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2"
                    placeholder="Username"
                    placeholderTextColor={'#f0f2f3'}
                />
            </View>
        );
    };
    const renderPassword = () => {
        if (!show) {
            return (
                <View className="flex-row">
                    <TextInput
                        className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2 w-[280px]  "
                        placeholder="password"
                        placeholderTextColor={'#f0f2f3'}
                        secureTextEntry={show}
                    />
                    <View className="mt-4 ml-[15px] ">
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => handleShowPassword()}
                        >
                            <Feather
                                name="eye"
                                color={colors.white}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            )
        }
        return (
            <View className="flex-row">
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2 w-[280px]"
                    placeholder="password"
                    placeholderTextColor={'#f0f2f3'}
                    secureTextEntry={show}
                />
                <View className="mt-4 ml-[15px]">
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleShowPassword()}
                    >
                        <Feather
                            name="eye-off"
                            color={colors.white}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        )



    };

    const renderLoginButton = () => {
        return (
            <View>
                <TouchableOpacity
                    className="w-full h-14 flex-row items-center justify-center bg-violet-800 rounded-lg mt-6"
                    activeOpacity={0.7}
                    onPress={() => navigate('home')}
                >
                    <Text className="font-semibold text-base text-wite ml-2">Login</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderNewUser = () =>{
        return(
            <View className="mt-2">
                <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigate('signup')}
                >
                    <Text  className="font-bold inline-block text-white">
                        New? <Text className="font-bold text-violet-400 inline-block">Sign up</Text>
                    </Text> 
                </TouchableOpacity>
            </View>
        )
    }
    const handleShowPassword = () => {
        setShow(!show)
    }

    return (
        <View className="ml-2 mt-6">
            <Text className="mt-6 text-white font-extrabold text-4xl">
                Login
            </Text>
            <Text className="mt-4 text-zinc-400 font-extrabold text-md mb-12">
                Please sign in to continue!
            </Text>
            <View>
                {renderUserName()}
            </View>
            <View className="mt-2 inline-block" >
                {renderPassword()}
            </View>
            <View>{renderLoginButton()}</View>

            <View>
                {renderNewUser()}
            </View>
        </View>
    );
}
