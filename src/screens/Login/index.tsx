import { View } from "react-native";
import Login from "./components/LogIn";
import  Header  from "../../components/Header";


export default function FullLogin(){
  return(
    <View className='flex-1 bg-background pt-8'>
      <Header/>
      <View className='flex-1 bg-background px-8 pt-8'>
      <Login/>
      </View>
    </View>
  )
}