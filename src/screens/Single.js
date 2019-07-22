import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

class Single extends Component{
    render(){

        let data = this.props.navigation.getParam('data', null);

        console.log(data);
        return(
            <ScrollView
                style={styles.container}
            >
                <View
                    style={styles.imageContainer}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: data.image }}
                    >

                    </Image>

                </View>

                <View
                    style={styles.titleContainer}
                >
                    <Text style={styles.title}>
                        {data.title}
                    </Text>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.content}>
                        {data.content}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    imageContainer: {
        // padding: 10,
        height: 200,
        width: '100%',
        // borderRadius: 15
    },
    image: {
        // borderRadius: 15,
        height: '100%',
        width: '100%'
    },
    titleContainer: {
        marginTop: 15
    },
    title: {
        fontSize: 30
    },
    contentContainer: {
        marginTop: 15
    },
    content: {
        fontSize: 18,
        lineHeight: 22
    }
})


export default Single;