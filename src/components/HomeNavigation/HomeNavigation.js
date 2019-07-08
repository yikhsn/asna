import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

class HomeNavigation extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* <View
                    colors={['#5063f9', '#6072fa', '#7081fb']}
                    style={styles.titleView}
                    // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                    <View>

                    </View>
                </View> */}
                <View style={styles.menuContainer}>
                    <View style={styles.menuLine}>
                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('ChattingScreen') }
                        >
                            <View style={styles.menu}>
                                <Icon name="ios-people" color="#6072FA" size={50} />
                                
                                <Text style={styles.menuCaption}>Asisten</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('ExploreScreen') }
                        >
                            <View style={styles.menu}>
                                <Icon3 name="explore" color="#6072FA" size={50} />
                                
                                <Text style={styles.menuCaption}>Jelajah</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.menuLine}>
                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('TherapyScreen') }
                        >
                            <View style={styles.menu}>
                                <Icon2 name="stethoscope" color="#6072FA" size={50} />
                                
                                <Text style={styles.menuCaption}>Terapi</Text>
                            </View>                        
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('ReportScreen') }                        
                        >
                            <View style={styles.menu}>
                                <Icon name="md-stats" color="#6072FA" size={50} />
                                
                                <Text style={styles.menuCaption}>Laporan</Text>
                            </View>
                        </TouchableOpacity>                        
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
        backgroundColor: '#6072FA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 250,

    },
    menuLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menu: {
        width: 100,
        height: 100,
        margin: 7,
        padding: 25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    menuCaption: {
        color: '#2f46f8',
        fontSize: 13,
        marginTop: 5,
        textAlign: 'center'
    }

});

export default HomeNavigation;