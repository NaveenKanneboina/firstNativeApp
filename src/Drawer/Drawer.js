import React from 'react'
import { StyleSheet, View, DrawerLayoutAndroid} from 'react-native'
import { Button } from "react-native-paper"
import Navigation from "../navigation/Navigation"

const Drawer = ({ navigation }) => {
    const navigationView = (
            <View style={styles.navigationContainer}>
              <Button mode="outlined"  color="blue" onPress={() =>
              navigation?.push('Login')
            }>Log IN</Button>
            </View>
          )
    return (
        <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => navigationView}
        >
          <Navigation />
        </DrawerLayoutAndroid>
    )
}

export default Drawer

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        padding: 8
      }
})
