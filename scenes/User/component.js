import React, { PureComponent } from 'react'
import { View, ScrollView, Text, Image, ImageBackground } from 'react-native'
import SceneHeader from 'components/SceneHeader'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import avatars from 'mockData/avatars'
import styles from './styles'


export default class User extends PureComponent {
    constructor(props) {
        super(props)

        this.props.getUserData(this.props.navigation.state.params.id)
    }

    render() {
        if (!this.props.id) {
            return null
        }

        return <View
            style={styles.container}>
                <SceneHeader
                    style={styles.sceneHeader}
                />
                <View style={styles.page}>
                    <ImageBackground
                        source={avatars[this.props.image]}
                        blurRadius={3}
                        style={styles.userImageBox}>

                        <Avatar source={avatars[this.props.image]} />
                        <Text
                            style={styles.userName}
                            numberOfLines={1}>{this.props.first_name} {this.props.last_name}</Text>
                        <Button style={styles.chatWithUserButton}>Chat with {this.props.first_name} {this.props.last_name}</Button>
                    </ImageBackground>
                    <ScrollView>
                        <View style={styles.fieldsList}>
                            <View style={[styles.fieldRow, styles.fieldRow_first]}>
                                <Text style={styles.fieldRow__title}>E-mail</Text>
                                <Text style={[styles.fieldRow__value, styles.fieldRow__value_type_url]}>{this.props.email}</Text>
                            </View>
                            <View style={styles.fieldRow}>
                                <Text style={styles.fieldRow__title}>First Name</Text>
                                <Text style={styles.fieldRow__value}>{this.props.first_name}</Text>
                            </View>
                            <View style={styles.fieldRow}>
                                <Text style={styles.fieldRow__title}>Last Name</Text>
                                <Text style={styles.fieldRow__value}>{this.props.last_name}</Text>
                            </View>
                            <View style={styles.fieldRow}>
                                <Text style={styles.fieldRow__title}>LinkedIn</Text>
                                <Text style={[styles.fieldRow__value, styles.fieldRow__value_type_url]}>{this.props.linkedin}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

        </View>
    }
}
