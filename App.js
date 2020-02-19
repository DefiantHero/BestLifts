import React, {Component} from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation/Navigation';
import * as firebase from 'firebase';
import LoginForm from './src/components/Login/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCLsWYEisJKvzEWta0Wi2IAHZOFSPfLw_Y',
      authDomain: 'bestlifts-98379.firebaseapp.com',
    }
 
    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn(){
    this.setState({
      authenticating: true,
    });
  }
  

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <view>
          <ActivityIndicator size='large'/>
        </view>
      )
    }
    return (
      <Navigation/>
    )
  }

  render() {
    return (
      <View style={{flex:1,flexGrow:1}}>
          <Navigation/>
      </View>
        
    );
  }
}
