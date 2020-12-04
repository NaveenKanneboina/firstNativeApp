import React,{useState} from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"
import Login from "../screens/Login"
import ToDo from "../screens/ToDo"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import { useSelector } from "react-redux"

const Navigation = () => {

    const Stack = createStackNavigator();
    const logedIn = useSelector(state => state.isSignIn)
    return (
        <>
            {logedIn ? (
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ToDo" component={ToDo} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>) : (
                    <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>)
            }
        </>
    )
}

export default Navigation

const styles = StyleSheet.create({})
