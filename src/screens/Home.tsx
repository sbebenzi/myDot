import { View } from "react-native";
<<<<<<< HEAD
import { Header } from "../components/Header";
export function Home(){
=======
import  Header  from "../components/Header";
import { ButtonMenu } from "../components/ButtonMenu";

export default function Home(){
>>>>>>> b1d6e184800c4f46e0f0c932ae84680afa8c3d91
    return(
        <View className="flex-1 bg-background pt-8">
            <Header/>
            <ButtonMenu/>
        </View>

    )
}