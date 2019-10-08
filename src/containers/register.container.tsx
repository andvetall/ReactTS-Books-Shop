import { connect } from 'react-redux'
import { RegisterComponent } from '../components/register.component'
import { RootState } from "../redux/root.reducer";
import  {doRegister} from '../redux/registration/actions'

const mapStateToProps = (state: RootState) => ({
    message: state.register.message,
    isRegistred: state.register.isRegistred
});

export default connect(mapStateToProps,
     {doRegister}
     )(RegisterComponent)
  