import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';
import HomeNavigation from '../components/HomeNavigation/HomeNavigation';

class Home extends Component{

    static navigationOptions = { 
        header: { 
            visible: false
        } 
    };

    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#6072FA" 
                    barStyle="light-content" 
                />

                <HomeNavigation 
                    navigation={this.props.navigation}
                />
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