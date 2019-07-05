import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ChatOut extends Component{
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
        paddingLeft: 50,
        marginVertical: 10
    },

    box: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#6072FA',
        height: 'auto',
        width: 'auto'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14
    }
})

export default ChatOut;