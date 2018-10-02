import React, { Component } from 'react'
import { View } from 'react-native'
import List from 'components/List'
import styles from './styles'


export default class Users extends Component {
    componentDidMount() {
        if (this.props.data.items.length === 0) {
            this.props.fetchUsers()
        }
    }

    onScrolledToEnd() {
        if (this.props.data.status !== 'fetching' &&
            this.props.data.status !== 'fetchedAll') {
            this.props.fetchUsersMore()
        }
    }


    render() {

        return <View style={styles.container}>
            <List
                data={this.props.data.items}
                onScrolledToEnd={() => this.onScrolledToEnd()}
                isLoading={this.props.data.status === 'fetching'}
            />
        </View>
    }
}
