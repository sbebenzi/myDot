import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import  Home  from '../screens/Home';
import Login from '../screens/Login/index';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='login'
                component={Login}
            />
            <Screen
                name='home'
                component={Home}
            />
        </Navigator>
    );
}