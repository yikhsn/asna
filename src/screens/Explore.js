import React, { Component } from 'react';
import {
    View,
    ScrollView,
    FlatList,
    Text,
    StyleSheet
} from 'react-native';
import Content from '../components/Content/Content';
import axios from 'axios';
// import console = require('console');
// import console = require('console');

class Explore extends Component{

    state = {
        contents: []
    }

    constructor(){
        super();

        axios.get(`https://asnaapi.free.beeceptor.com/`)
            .then(res => {
                const contents = res.data;
                this.setState({ contents });
            })
    }

    render(){
        console.log(this.props.navigation);
        return(
            <ScrollView style={styles.container}>
                {/* <View style={styles.featuredContainer}>
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
                </View> */}
                <View style={styles.otherContainer}>
                    {/* <Text style={styles.otherTitle}>Lainnya</Text> */}

                    <FlatList
                        data={ this.state.contents.data }
                        renderItem={ ({ item }) => {
                            return <Content 
                                data={item} 
                                navigation={this.props.navigation}
                            />
                        } }
                        keyExtractor={ (item, index) => item + index }
                    />
{/* 
                    <Content 
                        data={
                            { 
                                "id": "10",
                                "title": "Jauhi narkoba atau kematian mendekatimu!",
                                "content": "Bahaya narkoba sudah tidak diragukan lagi. Sayangnya, penyalahgunaan obat-obatan terlarang makin marak di berbagai negara di seluruh dunia, termasuk Indonesia. Masyarakat mengenal obat-obatan terlarang sebagai narkoba yang merupakan singkatan dari narkotika, psikotropika, dan bahan berbahaya lainnya. Banyak pengguna obat-obatan ini yang awalnya tergoda merasakan kesenangan sesaat atau sebagai pelarian dari masalah yang dihadapi. Padahal, efek narkoba dapat merusak kesehatan secara fisik dan kejiwaan.",
                                "image": "https://cdn.brilio.net/news/2018/02/21/139228/10-penampakan-ganja-saat-dilihat-dengan-mikroskop-bikin-kamu-melongo-180221c.jpg"
                            }
                        }
                        navigation={this.props.navigation}
                    /> */}

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
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

});

export default Explore;