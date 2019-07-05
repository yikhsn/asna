import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeNavigation from '../components/HomeNavigation/HomeNavigation';

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <HomeNavigation />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Home;