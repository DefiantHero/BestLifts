import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import Login from '../Login/Login';

const AppStack = createStackNavigator({Home : HomeScreen});
const AuthStack = createStackNavigator({Login: Login});

export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: 'Auth',
        }
    )
);