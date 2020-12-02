import React from 'react'
import { Appbar } from "react-native-paper"

const Home = () => {
    return (
            <Appbar style={{paddingTop:50, paddingBottom:30}}>
   <Appbar.Action
     icon="menu"
     size={50}
     onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Content title="EZERKA"/>
    </Appbar>
    )
}

export default Home
