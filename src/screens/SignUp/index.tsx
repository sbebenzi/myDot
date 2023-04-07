import Signup from "./components/Signup";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Header } from "../../components/Header";

export default function SignUp(){
  return (
    <View className='flex-1 bg-background pt-8'>
      <Header />
      <View className='flex-1 bg-background px-8 pt-8'>
        <Signup />
      </View>
    </View>

  )
}