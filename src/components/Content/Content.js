import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';


class Content extends Component{
    render(){

        console.log(this.props);
        return(
            <TouchableOpacity
                onPress={ () => this.props.navigation.navigate('SingleScreen', {
                    data: this.props.data
                })}
            >
                <View style={styles.container}>
                    <View style={styles.bodyLeft}>
                        <Image 
                            style={styles.imageContent}
                            source={{ uri: this.props.data.image}}
                        >

                        </Image>
                    </View>
                    <View style={styles.bodyRight}>
                        <Text
                            style={styles.titleContent}
                        >
                            {this.props.data.title}        
                        </Text>
                    </View>


                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // padding: 15,
        width: '100%',
        height: 80,
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    bodyLeft: {
        width: '35%',
        height: '100%',
    },
    imageContent: {
        // width: '100%',
        // height: '10%'
        flex: 1,
        // borderRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    bodyRight: {
        padding: 10,
        width: '65%',
        height: '100%'
    },
    titleContent: {
        fontSize: 18,
        fontWeight: '400'
    }
})

export default Content;