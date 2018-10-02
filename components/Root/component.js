import React from 'react';
import { View, Text } from 'react-native'
import { NativeRouter, Switch, Route, BackButton } from 'react-router-native'
import scenes from 'scenes'
import * as routeKeys from './constants/routeKeys'

export default () => (
    <NativeRouter>
        <BackButton>
            <View style={{ flex: 1, backgroundColor: 'red', paddingTop: 50}}>
                <Switch>
                    <Route path={routeKeys.ROOT} component={scenes.Posts} />
                    <Route path={routeKeys.USER} component={scenes.User} />
                </Switch>
            </View>
        </BackButton>
    </NativeRouter>
)
