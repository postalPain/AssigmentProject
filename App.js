import React from 'react';
import { Provider } from 'react-redux'
import setupStore from 'store/setupStore'
import Root from 'components/Root'

export const store = setupStore()

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}
