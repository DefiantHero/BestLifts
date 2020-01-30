import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to The Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor: '#0e6ac7'
    },
    text: {
        fontSize: 20,

    }
})
