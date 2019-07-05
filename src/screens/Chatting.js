import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ChatView from '../components/ChatView/ChatView';
import TextTyper from '../components/TextTyper/TextTyper';

class Chatting extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <ChatView />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    }
})

export default Chatting;