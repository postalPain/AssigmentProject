import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import immutableState from 'redux-immutable-state-invariant'
import rootReducer from './rootReducer'
import initialState from './initialState'

export default () => createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            immutableState()
        )
    )
)
