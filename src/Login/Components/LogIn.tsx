import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const renderUserName = () => {
        return (
            <View>
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2"
                    placeholder="Username"
                />
            </View>
        );
    };
    const renderPassword = () => {
        return (
            <View>
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2"
                    placeholder="password"
                    secureTextEntry={true}
                />
            </View>
        );
    };

    const renderLoginButton = () => {
        return (
            <View>
                <TouchableOpacity
                    className="w-full h-14 flex-row items-center justify-center bg-violet-800 rounded-lg mt-6"
                    activeOpacity={0.7}
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
                >
                    <Text  className="font-bold inline-block">
                        Novo? <Text className="font-bold text-violet-400 inline-block">Sign up</Text>
                    </Text> 
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View className="ml-2 mt-6">
            <View>
                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Username:
                </Text>
                {renderUserName()}
            </View>
            <View className="mt-2">
                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Password:
                </Text>
                {renderPassword()}
            </View>
            <View>{renderLoginButton()}</View>

            <View>
                {renderNewUser()}
            </View>
        </View>
    );
}
