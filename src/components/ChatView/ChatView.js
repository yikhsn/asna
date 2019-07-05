import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ChatIn from '../ChatIn/ChatIn';
import ChatOut from '../ChatOut/ChatOut';
import TextTyper from '../TextTyper/TextTyper';

class ChatView extends Component{
    render(){
        return(
            <View>
                <View style={styles.chatView}>
                    <View style={styles.space}></View>
                    <ChatIn
                        text="Assaluma'alaikum Wr. Wb. Saya AsNa, saya akan membantu kamu untuk mendengar hal-hal yang ingin kamu bicarakan"
                        />
                    <ChatOut
                        text='Nama saya Yaumil Ikhsan...'
                    />
                    <ChatOut
                        text='Saya ingin melakukan konsultasi terhadap stres yang saya alami belakangan ini'
                    />
                    <ChatIn
                        text="Apakah kamu gila?"
                        />
                    <ChatIn
                        text="Gejala-gejala apa saja yang kamu alami?"
                        />
                    {/* <ChatIn
                        text="Bisa tolong ceritakan hal-hal yang membuat kamu tertekan selama ini. Gejala-gejala apa saya yang kamu alami belakangan ini"
                    />
                    <ChatOut
                        text='Tapi saya malu bercerita bagaimana. Tolong rahasiakan cerita saya ini ya'
                        />
                    <ChatIn
                        text="Baik, cerita anda aman bersama saya"
                    /> */}
                    <View style={styles.space}></View>
                </View>

                <TextTyper />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chatView: {
        flex: 1,
        paddingHorizontal: 20
    },
    space: {
        height: 10
    }
})

export default ChatView;