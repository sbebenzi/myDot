import { View } from "react-native";
import  Header  from "../../components/Header";
import { ButtonMenu } from "./components/ButtonMenu";

export default function Home(){
    return(
        <View className="flex-1 bg-background pt-8">
            <Header/>
            <ButtonMenu/>
        </View>

    )
}