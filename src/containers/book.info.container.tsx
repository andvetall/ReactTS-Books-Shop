import { connect } from 'react-redux'
import  BookInfo  from '../components/book.info.component'
import { RootState } from "../redux/root.reducer";
import { addToCart } from "../redux/addToCart/actions"

const mapStateToProps = (state: RootState) => ({
    data: state.login.data,
    id: state.addToCart.id
});

export default connect(mapStateToProps,{addToCart})(BookInfo)