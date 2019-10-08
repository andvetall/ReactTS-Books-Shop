import { connect } from 'react-redux'
import  UserInfo  from '../components/user.info.component'
import { RootState } from "../redux/root.reducer";
import { doLogin } from "../redux/login/actions"
import { updateUser } from '../redux/showUsers/actions'

const mapStateToProps = (state: RootState) => ({
    userinfo: state.login
});

export default connect(mapStateToProps,{doLogin, updateUser})(UserInfo)