import { connect } from 'react-redux'
import  LoginComponent  from '../components/login.component'
import { RootState } from "../redux/root.reducer";
import  {doLogin} from '../redux/login/actions'

const mapStateToProps = (state: RootState) => ({
    data: state.login.data,
    message: state.login.message,
});

export default connect(mapStateToProps,
     {doLogin}
     )(LoginComponent)
  