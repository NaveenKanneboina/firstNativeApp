import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"
import Login from "../screens/Login"

const Navigation = () => {

    const Stack = createStackNavigator();

    return (
        <>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        </>
    )
}

export default Navigation

const styles = StyleSheet.create({})
