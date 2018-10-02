import { combineReducers } from 'redux'
import users from 'scenes/Users/reducer'
import user from 'scenes/User/reducer'


export default combineReducers({
    users,
    user
})
