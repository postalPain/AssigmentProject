import { FETCH_USERS, FETCH_USERS_MORE } from '../constants/actionTypes'
import PAGE_SIZE from '../constants/PAGE_SIZE'
import { getUsers } from '../helpers/data'

export const fetchUsers = () => (dispatch, getState) => {
    dispatch({
        type: FETCH_USERS,
        status: 'fetching'
    })


    getUsers(0, PAGE_SIZE)
        .then(data => {
            dispatch({
                type: FETCH_USERS,
                status: 'fetched',
                items: data.items
            })
        })
}

export const fetchUsersMore = (startItem = 0) => (dispatch, getState) => {
    const prevDataItems = getState().users.data.items

    dispatch({
        type: FETCH_USERS_MORE,
        status: 'fetching'
    })


    getUsers(prevDataItems.length, PAGE_SIZE)
        .then(data => {
            const items = [].concat(prevDataItems, data.items)

            dispatch({
                type: FETCH_USERS_MORE,
                status: data.items.length === 0 ? 'fetchedAll' : 'fetched',
                items
            })
        })
}
