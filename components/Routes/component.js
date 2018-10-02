import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import NavigationService from 'services/NavigationService'
import scenes from 'scenes'
import * as routeKeys from './constants/routeKeys'


const TopLevelNavigator = createStackNavigator({
    [routeKeys.USERS]: scenes.Users,
    [routeKeys.USER]: scenes.User
},
{
    initialRouteName: routeKeys.USERS,
    navigationOptions: {
        header: null
    },
    transitionConfig: getSlideFromRightTransition
})


export default class Routes extends Component {
    render() {
        return (
            <TopLevelNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        )
    }
}
