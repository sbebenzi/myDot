import { View } from "react-native";
import { Header } from "../Components/Header";

export default function Home(){
    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <Header/>
        </View>

    )
}