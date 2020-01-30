import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm , {AppNavigator} from './LoginForm';


const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props)
    }
    render() {
        return (
            <DismissKeyboard>
            <KeyboardAvoidingView behavior="padding" enabled 
                style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../images/logo.png')} />
                    <Text style={styles.title}>Track Your Path to Fitness!</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </KeyboardAvoidingView>
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e6ac7'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 150, 
    },
    title: {
        color: '#ffffff',
        marginTop: 10,
        textAlign: 'center',
    }
})