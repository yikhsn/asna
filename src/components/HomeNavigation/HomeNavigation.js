import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeNavigation extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <View>

                    </View>
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.menuLine}>
                        <View style={styles.menu}>
                            <Icon name="ios-people" color="#6072FA" size={60} />
                            
                            <Text>Menu 1</Text>
                        </View>

                        <View style={styles.menu}>
                            <Icon name="ios-people" color="#6072FA" size={60} />
                            
                            <Text>Menu 1</Text>
                        </View>
                        
                    </View>

                    <View style={styles.menuLine}>
                        <View style={styles.menu}>
                            <Icon name="ios-people" color="#6072FA" size={60} />
                            
                            <Text>Menu 1</Text>
                        </View>

                        <View style={styles.menu}>
                            <Icon name="ios-people" color="#6072FA" size={60} />
                            
                            <Text>Menu 1</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    titleView: {
        height: 150,
        width: '110%',
        backgroundColor: '#6072FA',
        borderBottomEndRadius: 150,
        // borderBottomStartRadius: 150,

    },  
    menuContainer: {
        // height: '70%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        padding: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menu: {
        width: 80,
        height: 80,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default HomeNavigation;