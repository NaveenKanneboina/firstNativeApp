import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Header from "../components/Header"

const HomeScreen = ({navigation}) => {

const title = "Naveen Nani 🤟🤟"
const content = "We will use Paper's Switch for this purpose."

    return (
        <>
            <TouchableOpacity
                onPress={() =>
                navigation?.push('Details', {
                    title,
                    content,
                })
                }
                >
                <Card>
                <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph>{content}</Paragraph>
                </Card.Content>
                </Card>
            </TouchableOpacity>
            <View>
                <Header />
                <Button onPress={() =>
                navigation?.push('Login')}>Log IN</Button>
            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
