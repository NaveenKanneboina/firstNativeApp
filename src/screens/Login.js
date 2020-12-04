import React, {useState} from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { TextInput, Button, Title, Searchbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux"
import { user } from "../Actions"


const Login = () => {

    const dispatch = useDispatch();

    return (
        <View style={styles.loginContainer}>
            <View/>
            <View style={styles.login}>
                <Image style={styles.tinyLogo} source={require("../../assets/VJit.png")}/>
                <Title style={styles.title}>Login Portal</Title>
                
                <View style={styles.container} >
                    <Icon name="user-circle" size={30} style={styles.icon}/>
                    <TextInput label="UserName"  mode="outlined" style={styles.input}/>
                </View>
                <View  style={styles.container}>
                    <Icon name="lock" size={40} style={styles.icon}/>
                    <TextInput label="Password" secureTextEntry={true} mode="outlined" style={styles.input}/>
                    <Icon name="eye" size={20} style={styles.icons}/>
                </View>
                <View flexDirection="row">
                    <Button style={styles.button} mode="contained" 
                    onPress={()=> dispatch(user())}>Log in</Button>
                    <Button style={styles.button} >Sign Up</Button>
                </View>
                <Text style={{fontSize:16}}>Forgot Password ?</Text>
            </View>
            <View/>    
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"column",
        flex:1
    },
    tinyLogo:{
        width: 150,
        height: 150,
        backgroundColor:"red"
    },
    title:{
        fontSize:30,
        marginBottom:20,
        marginTop:20
    },
    login:{
        alignItems:"center"
    },
    input:{
        height:50,
        marginBottom:20,
        width:200,
        fontSize:20,
    },
    button:{
        margin:10,
        color:"green"
    },
    icon:{
        marginRight:10,
        color:"#171717"
    },
    icons: {
        position: 'absolute',
        right: 10,
        color:"#171717"
      },
    container:{
        flexDirection:"row", justifyContent:"center", alignItems:"center"
    }
})
