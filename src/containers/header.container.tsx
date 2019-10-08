import { connect } from 'react-redux'
import  HeaderComponent  from '../components/header.component'
import { RootState } from "../redux/root.reducer";


const mapStateToProps = (state: RootState) => ({
    data: state.login.data,
    bookId: state.addToCart.id,
    
});

export default connect(mapStateToProps)(HeaderComponent)
  