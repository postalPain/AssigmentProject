import { connect } from 'react-redux'
import Users from './component'
import { fetchUsers, fetchUsersMore } from './actions'

const mapStateToProps = state => ({
    data: state.users.data
})

export default connect(
    mapStateToProps,
    {
        fetchUsers,
        fetchUsersMore
    }
)(Users)
