import React from 'react'
import './styles/header.component.css'
import { BrowserRouter as Router, Redirect, Link, LinkProps } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles, Theme } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SimpleMenuCart from './cart.component'
import { RootState } from '../redux/root.reducer';
import { connect } from 'react-redux'
import { Avatar } from "@material-ui/core"

const SimpleMenu: React.FC<any> = (props:any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
        <Link innerRef={ref as any} {...props} />
      ));
    
    return (
        <div className={props.class}>
            <Button
            style={{
                backgroundColor: "#3f51b5",
                color: "white",
            }}
            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.user}
                <Avatar
                    src={props.imgQQQ} alt="user-image"
                />
            </Button>
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
                <MenuItem 
                style={{
                    backgroundColor: "#3f51b5",
                    color: "white",
                    borderBottom: "solid 3px red"
                }}
                component={AdapterLink} to='/userInfo'   
                onClick={handleClose}>{props.my}</MenuItem>
                <MenuItem 
                style={{
                    backgroundColor: "#3f51b5",
                    color: "white",
                    borderBottom: "solid 3px red"
                }}
                onClick={handleClose}>{props.logout}</MenuItem>
            </Menu>
        </div>
    );
}

const StyledBadge = withStyles((theme: Theme) => ({
    badge: {
      top: '50%',
      right: -3,
      border: `2px solid ${
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
    },
  }))(Badge);

  const ms = (state: RootState) => ({
    addToCart: state.addToCart
}); 

const CustomizedBadges:React.FC<any> = (props:any) => {
        const count = props.addToCart.selectedBooks.reduce((a:any, b:any) => {
            return a + b.quantity
        },0)
        return(
            <IconButton
            aria-label="cart">
              <StyledBadge
              badgeContent={count} color="error">
                <ShoppingCartIcon 
                style={{
                    color: "white",
                }}
                />
              </StyledBadge>
            </IconButton>
          );
    }
    const cz = connect(ms)(CustomizedBadges)
    


export default class HeaderComponent extends React.Component<any, any>{
    state: any = {
        email: ""
    };
    toggleClass = ((e: any) => {
        let x: any = document.querySelectorAll('.link')
        for (let item of x) {
            item.className = "link"
        }
        e.target.className = "link active"
    })
    
    render() {
       return (
            <div>
                <div>
                    {
                        this.props.data.permission === "admin" ? 
                            (<div className="header-wrapper">
                                <div onClick={(e) => this.toggleClass(e)} className='link'><Link to="home-admin">Home Admin</Link></div>
                                <SimpleMenu 
                                    imgQQQ={this.props.data.userImg}
                                    class="welcome"
                                    my = 'My Account'
                                    user={<div className="logout">{`Welcome ${this.props.data.email}`}</div>}
                                    logout={<div className="logout" onClick={() => {localStorage.clear(); window.location.reload(); window.location.href = "/login"}}>Logout</div>}
                                ></SimpleMenu>
                                <Redirect to="/home-admin" />
                            </div>) :
                        this.props.data.permission === "user" ?
                            (<div className="header-wrapper">
                                <div onClick={(e) => this.toggleClass(e)} className='link'><Link to="/home">Home</Link></div>
                                <SimpleMenuCart 
                                    class="cart"
                                    user = { React.createElement(cz, {})}
                                ></SimpleMenuCart>
                                <SimpleMenu 
                                    imgQQQ={this.props.data.userImg}
                                    class="welcome"
                                    my = 'My Account'
                                    user={`Welcome ${this.props.data.email}`}
                                    logout={<div className="logout" onClick={() => {localStorage.clear(); window.location.reload(); window.location.href = "/login"}}>Logout</div>}
                                ></SimpleMenu>
                                
                            </div>) :
                            (<div className="header-wrapper">
                                <li onClick={(e) => this.toggleClass(e)} className='link' key='register-link'><Link to="register">Register</Link></li>
                                <li onClick={(e) => this.toggleClass(e)} className='link' key='login-link'><Link to="login">Log In</Link></li>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}

