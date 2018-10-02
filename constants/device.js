import { Platform } from 'react-native'

export const isIOS = (() => Platform.OS === 'ios')()
export const STATUSBAR_HEIGHT = isIOS ? 40 : StatusBar.currentHeight
