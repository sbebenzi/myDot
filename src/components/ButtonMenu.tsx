import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native'


export function ButtonMenu() {

    const { navigate } = useNavigation();

    const actions = [
        {
            icon: require("../../assets/search.png"),
            name: "bt_search",
            color: "#5b21b6",
            position: 2
        },
        {
            icon: require("../../assets/camera.png"),
            name: "bt_photo",
            color: "#5b21b6",
            position: 1
        },

    ];

    const renderFab= () => {
        return (
            <View>
            <FloatingAction
                showBackground={false}
                actions={actions}
                color="#5b21b6"
                onPressItem={
                    (name) => {
                        if (name === 'bt_search') {
                            console.log('Search Photo');
                        } else if (name == 'bt_photo') {
                            navigate('camera')
                        }
                    }
                }

            />
        </View>
        );
    };

    return (
       <View className="absolute right-0 bottom-0"> 
        {renderFab()}
       </View>

    )
}