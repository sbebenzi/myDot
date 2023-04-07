import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { useNavigation, useRoute } from '@react-navigation/native'


import Logo from '../../assets/logo.svg';

export function Header() {
  const { navigate } = useNavigation();

  const route = useRoute();

  const renderLogOutButton = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row h-11 px-4 mr-2 border border-white rounded-lg items-center"
          onPress={() => navigate('login')}
        >
          <Feather
            name="log-out"
            color={colors.white}
            size={20}
          />

          <Text className="text-white ml-3 font-semibold text-base">
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (route.name === ('home')) {
    return (
      <View className="w-full h-16 flex-row bg-header items-center justify-between">
        <Logo />
        <Text className="text-white mr-36 font-semibold text-2xl">
          MyDot
        </Text>
        <View>
          {renderLogOutButton()}
        </View>
      </View>
    )
  } else {
    return (
    <View className="w-full h-16 flex-row bg-header items-center justify-center">
      <Logo />
      <Text className="text-white ml-1 font-semibold text-2xl ">
        MyDot
      </Text>
    </View>
    )
  }
}
