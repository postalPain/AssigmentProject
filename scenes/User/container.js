import { connect } from 'react-redux'
import User from './component'
import { getUserData } from './actions'

const mapStateToProps = state => ({
    ...state.user
})

export default connect(
    mapStateToProps,
    {
        getUserData
    }
)(User)
