<<<<<<< HEAD
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import Login from "../screens/Login/index";
import SignUp from "../screens/SignUp/index";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  );
}
=======
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
>>>>>>> b1d6e184800c4f46e0f0c932ae84680afa8c3d91
