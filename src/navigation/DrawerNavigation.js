import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ToDo from "../screens/ToDo"
import HomeScreen from "../screens/HomeScreen"
import Login from "../screens/Login"

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="ToDo" component={ToDo} />
      </Drawer.Navigator>
  );
}