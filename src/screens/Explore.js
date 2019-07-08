import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

class Explore extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.featuredContainer}>
                    <Text style={styles.featuredTitle}>Pilihan</Text>
                    <ScrollView 
                        style={styles.featuredBox}
                        horizontal={true}
                    >
                        <View style={styles.featuredContent}></View>
                        <View style={styles.featuredContent}></View>
                        <View style={styles.featuredContent}></View>
                        <View style={styles.featuredContent}></View>
                        <View style={styles.featuredContent}></View>
                        <View style={styles.featuredContent}></View>
                    </ScrollView>
                </View>
                <View style={styles.otherContainer}>
                    <Text style={styles.otherTitle}>Lainnya</Text>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                    <View style={styles.otherContent}></View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    featuredContainer: {
        // height: 200,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        // backgroundColor: 'red'
    },
    featuredTitle: {
        fontSize: 20,
        color: '#444444',
        marginBottom: 10
    },
    featuredBox: {
        flexDirection: 'row'
    },
    featuredContent: {
        height: 120,
        width: 120,
        backgroundColor: 'red',
        marginRight: 15,
        borderRadius: 10
    },
    otherContainer: {
        padding: 15
    },
    otherTitle: {
        fontSize: 18,
        color: '#444444',
        marginBottom: 10
    },
    otherContent: {
        width: '100%',
        height: 80,
        backgroundColor: 'blue',
        marginBottom: 15,
        borderRadius: 10
    }
});

export default Explore;