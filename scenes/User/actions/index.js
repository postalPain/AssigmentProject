import { GET_USER_DATA } from '../constants/actionTypes'


export const getUserData = id => (dispatch, getState) => {
    const data = getState().users.data.items.find(item => item.id === id)

    dispatch({
        type: GET_USER_DATA,
        data
    })
}
