import { TextInput, View } from "react-native";


export default function Signup() {

    const renderUserName = () => {
        return (
            <View>
                <TextInput
                    className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800 mb-2"
                    placeholder="Username"
                />
            </View>
        );
    }
    return (
        <View>
            {renderUserName()}
        </View>
    )
}