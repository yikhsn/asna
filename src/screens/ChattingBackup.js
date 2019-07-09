import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import ChatView from '../components/ChatView/ChatView';
import TextTyper from '../components/TextTyper/TextTyper';

// const screenHeight = Dimensions.get('window').height;

class Chatting extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.chatView}>
                    <ChatView />
                </ScrollView>
                <TextTyper />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatView: {
        // height: screenHeight - 140,
    }
})

export default Chatting;