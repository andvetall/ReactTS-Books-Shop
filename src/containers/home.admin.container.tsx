import { connect } from 'react-redux'
import  HomeAdminComponent  from '../components/home.admin.component'
import { RootState } from "../redux/root.reducer";
import { showBooks } from "../redux/showBooks/actions"
import { showUsers } from "../redux/showUsers/actions"

const mapStateToProps = (state: RootState) => ({
    books: state.showBooks.Books,
    users: state.showUsers.Users,
    data: state.login.data,
});


export default connect(mapStateToProps,{showBooks, showUsers})(HomeAdminComponent)