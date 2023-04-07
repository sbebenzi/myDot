import { useEffect, useState } from "react";
import { TextInput, View, NativeSyntheticEvent, TextInputChangeEventData, Text, TouchableOpacity } from "react-native";
import colors from 'tailwindcss/colors';
import { Feather } from '@expo/vector-icons';

export default function Signup() {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [equalsPasswords, setEqualsPasswords] = useState(true)
    const [show, setShow] = useState(true)

    const renderUserName = () => {

        useEffect(() => {
            if (password !== confirmPassword) {
                setEqualsPasswords(false)
                return
            }
            setEqualsPasswords(true)
        }, [confirmPassword]);

        return (
            <View>
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2"
                    placeholder="Username"
                    placeholderTextColor={'#f0f2f3'}
                />
            </View>
        );
    }

    const renderPassword = () => {
        return (
            <View className="flex-row">
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2 w-[280px]"
                    placeholder="Password"
                    value={password}
                    onChange={handleWhritePassword}
                    secureTextEntry={show}
                    placeholderTextColor={'#f0f2f3'}
                />
                {
                    show ?
                        <View className="mt-4 ml-[15px] ">
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
                        </View> :

<View className="mt-4 ml-2 ">
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
                }

            </View>
        );
    }
    const handleWhritePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(e.nativeEvent.text)
    }
    const renderConfirmPassword = () => {

        return (
            <View className="flex-row">
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2 w-[330px]"
                    placeholder="Password"
                    placeholderTextColor={'#f0f2f3'}
                    value={confirmPassword}
                    secureTextEntry={show}
                    onChange={handleChangeConfirmPassword}
                />
                
            </View>
        )


    }
    const handleShowPassword = () => {
        setShow(!show)
    }
    const renderSenhaDiferente = () => {
        if (equalsPasswords) {
            return
        }
        return (
            <Text className="text-sm text-red-600">
                As senhas Devem ser iguais
            </Text>
        )
    }

    const handleChangeConfirmPassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setConfirmPassword(e.nativeEvent.text)
    }

    return (
        <View>

            <Text className="mt-6 text-white font-extrabold text-4xl">
                Create Acaunt
            </Text>
            {renderUserName()}
            {renderPassword()}
            {renderConfirmPassword()}
            {renderSenhaDiferente()}
        </View>
    )
}