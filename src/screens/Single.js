import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
    GiftedChat,
    Bubble
} from 'react-native-gifted-chat';
import TextTyper from '../components/TextTyper/TextTyper';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../dialogFlow/env';

const BOT_USER = {
    _id: 2,
    name: 'FAQ Bot',
    avatar: 'https://i.imgur.com/7k12EPD.png'
};

class Single extends Component{
    state = {
        messages: [
            {
                _id: 1,
                text: `Selamat datang, saya Asna \n\nDengan siapa saya sedang berbicara?`,
                createdAt: new Date(),
                user: BOT_USER
            }
        ]
    };

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        );
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#6072FA'
                    },
                    left: {
                        backgroundColor: '#ECEEFD',
                        // color: '#3C3C46'
                    }
                }}
            />
        )
    }

    _onSend = (props) => {
        props.onSend({ text: props.text.trim() }, true)
      }

    renderSend = (props) => {
        return(
            <View style={styles.sendButtonContainer}>
                <TouchableOpacity onPress={() => this._onSend(props)} style={styles.sendButton}>
                    <Icon name="md-send" color="#FFFFFF" size={25} />
                </TouchableOpacity>
            </View>
        )
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
    
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            result => this.handleGoogleResponse(result),
            error => console.log(error)
        );
    }

    handleGoogleResponse(result) {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    
    sendBotResponse(text) {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT_USER
        };
    
        this.setState(previousState => ({
             messages: GiftedChat.append(previousState.messages, [msg])
        }));
    }
      
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <GiftedChat
                renderBubble={this.renderBubble}
                // renderSend={this.renderSend}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1
                }}
                />
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
        // flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6072FA'
    }
})


export default Single;