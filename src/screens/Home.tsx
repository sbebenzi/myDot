import { View } from "react-native";
import { Header } from "../Components/Header";

export function Home(){
    return(
        <View className="flex-1 bg-background pt-8">
            <Header/>
        </View>

    )
}