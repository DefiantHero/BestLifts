import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import {StackNavigator, } from 'react-navigation';
import AppNavigator from './src/components/Login/LoginForm';
import Navigation from './src/components/Navigation/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,flexGrow:1}}>
          <Navigation/>
      </View>
        
    );
  }
}
