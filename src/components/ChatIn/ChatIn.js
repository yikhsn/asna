import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ChatIn extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 50,
        marginVertical: 10
    },

    box: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#ECEEFD',
        height: 'auto',
        width: 'auto'
    },
    text: {
        color: '#3C3C46',
        fontSize: 14
    }
})

export default ChatIn;