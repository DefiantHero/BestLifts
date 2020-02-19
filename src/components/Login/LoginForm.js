import React, {Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, onChangeText} from 'react-native';

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        authenticating: false,
      }
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
                <TextInput 
                placeholder="Username or Email Address"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                /> 

                <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('pressed')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10, 
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
    }
})