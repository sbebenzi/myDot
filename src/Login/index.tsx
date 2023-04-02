import { View } from "react-native";
import Login from "./Components/LogIn";
import { Header } from "../Components/Header";

export default function FullLogin(){
  return(
    <View className="w-full h-full bg-background">
      <Header/>
      <Login/>
    </View>
  )
}