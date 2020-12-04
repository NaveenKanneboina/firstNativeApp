import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Header from "../components/Header"

const HomeScreen = ({navigation}) => {

const title = "Naveen Nani 🤟🤟"
const content = "We will use Paper's Switch for this purpose.We will use Paper's Switch for this purposeWe will use Paper's Switch for this purpose"

    return (
        <>
            <Header />
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
                <View flexDirection="row" justifyContent="space-around">
                    <Button onPress={() =>
                    navigation?.push('ToDo')}> Add Tasks</Button>
                </View>
            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
