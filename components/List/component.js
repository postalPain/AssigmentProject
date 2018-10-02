import React, { PureComponent } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import NavigationService from 'services/NavigationService'
import * as routeKeys from 'components/Routes/constants/routeKeys'
import Avatar from 'components/Avatar'
import avatars from 'mockData/avatars'
import MessageButton from './components/MessageButton'
import Preloader from './components/Preloader'
import styles from './styles'


const ListEmptyComponent = () => (<View>
    <Text>List is empty</Text>
</View>)

export default class List extends PureComponent {

    componentDidUpdate(prevProps) {
        if(prevProps.data.length !== this.props.data.length) {
            this.flatListElement.flashScrollIndicators()
        }
    }

    onPressItem(item) {
        NavigationService.navigate(routeKeys.USER, {
            id: item.id
        })
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() => this.onPressItem(item)}>
                <View style={styles.card}>
                    <View style={styles.card__leftCol}>
                        <Avatar source={avatars[item.image]} />
                    </View>
                    <View style={styles.card__rightCol}>
                        <MessageButton style={styles.messageButton} />
                        <Text
                            style={styles.name}
                            numberOfLines={1}>{`${item.first_name} ${item.last_name}`}</Text>
                        <Text
                            style={styles.company}
                            numberOfLines={1}>{item.company}</Text>
                        <Text
                            style={styles.description}
                            numberOfLines={2}>{item.description}</Text>
                        <Text
                            style={styles.date}
                            numberOfLines={1}>{item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        return <View style={styles.container}>
            <FlatList
                ref={element => this.flatListElement = element}
                data={this.props.data}
                renderItem={(...props) => this.renderItem(...props)}
                keyExtractor={item => item.id}
                onEndReached={this.props.onScrolledToEnd}
                onEndReachedThreshold={0.15}
                ListEmptyComponent={ListEmptyComponent}
                getItemLayout={(data, index) => ({length: 120, offset: 120 * index, index})}
                initialNumToRender={25}
                maxToRenderPerBatch={5}
                windowSize={50}
            />
            { this.props.isLoading && <Preloader /> }
        </View>
    }
}
