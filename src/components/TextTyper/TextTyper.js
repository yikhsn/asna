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
                    <TouchableOpacity style={styles.sendButton}>
                        <Icon name="md-send" color="#FFFFFF" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        width: '100%',
        height: 60,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    textInputContainer: {
        flex: 1,
        width: '86%',
    },
    textInput: {
        borderColor: 'red',
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#ffffff'
    }, 
    sendButtonContainer: {
        width: '11%',
        marginLeft: '2%'
    },
    sendButton: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6072FA'
    }
})

export default TextTyper;