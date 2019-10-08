import React from 'react'
import './styles/header.component.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { RootState } from '../redux/root.reducer';
import { addToCart, moveFromCart } from '../redux/addToCart/actions';





const SimpleMenuCart: React.FC<any> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    let totalPrice = () => props.bookId.selectedBooks.reduce(
            (a: any, b: any) => {
                return a + b.price * b.quantity
            },0
        )
        
        const addItem = (id:any) => {
            const { addToCart } = props;
            addToCart( id ) ;
        }
        const moveItem = (id:any) => {
            const { moveFromCart } = props;
            moveFromCart( id ) ;
        }
        
    return (
        <div className={props.class}>
            <div
            style={{
                backgroundColor: "#3f51b5",
                color: "white",
            }}
            aria-controls="simple-menu" aria-haspopup="true" onClick={(e:any) => handleClick(e)}>
                {props.user}
            </div>
            <Menu
             style={{
                top: "80px",
                color: "white"
            }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.bookId.selectedBooks.map((book: any) => {
                    return <MenuItem 
                    className='cart-item'
                    key={`${Math.random()}-key`}
                    >{
                        <div 
                        id={book._id}
                        className="cart-item-wrapper">
                            <button 
                                onClick = {(e: any) => moveItem(book._id)}
                                id = {`${book.id}iD`}
                                className="dec">-
                            </button>
                            <p>{` ${book.title}: ${+book.price}usd (${+book.quantity})`}</p>
                            <button 
                                onClick = {(e: any) => addItem(book._id)}
                                id = {`${book._id}id`}
                                className="inc">+
                            </button>
                        </div>
                    }
                    </MenuItem>
                })}
                {<p className="total">Total price: {totalPrice()} $usd</p>}
                
            </Menu>
        </div>
    );
}
const mapStateToProps = (state: RootState) => ({
    bookId: state.addToCart
});
export default connect(mapStateToProps,{addToCart, moveFromCart})(SimpleMenuCart)