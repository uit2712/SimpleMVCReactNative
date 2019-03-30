import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../views/Home';

const StackCalculator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Calculator'
        }
    }
});

const ContainerCalculator = createAppContainer(StackCalculator);

export default class App extends Component<Props> {
    render() {
        return <ContainerCalculator/>
    }
}