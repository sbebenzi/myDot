import { View } from "react-native";
import Login from "./Components/LogIn";
import { Header } from "../Components/Header";


export default function FullLogin(){
  return(
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header/>
      <Login/>
    </View>
  )
}