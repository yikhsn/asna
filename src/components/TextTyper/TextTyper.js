import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TextTyper extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                    />
                </View>
                <View style={styles.sendButtonContainer}>
                    <TouchableOpacity >
                        <Icon name="md-send" color="#222222" size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    textInputContainer: {
        flex: 1,
        width: '85%',
    },
    textInput: {
        borderColor: 'red',
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#ffffff'
    }, 
    sendButtonContainer: {
        width: '10%',
        marginLeft: '2%'
    },
    sendButton: {
        backgroundColor: 'red'
    }
})

export default TextTyper;
