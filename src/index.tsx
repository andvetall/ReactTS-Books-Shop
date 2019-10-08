import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './App.css';
import LoginComponent from './containers/login.container';
import RegisterComponent from './containers/register.container'
import HomeComponent from './containers/home.container';
import HomeAdminComponent from './containers/home.admin.container';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import HeaderComponent from './containers/header.container';
import { Provider } from "react-redux";
import configureStore from './redux/store';
import { RootState } from "./redux/root.reducer";
import { Store } from "redux";
import BookInfo from './containers/book.info.container'
import UserInfo from './containers/userInfo.container'

const store: Store<RootState> = configureStore();

const MainMain: React.FC = () => {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderComponent></HeaderComponent>
            <Route path="/home" component={HomeComponent}/>
            <Route path="/home-admin" component={HomeAdminComponent}></Route>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/register" component={RegisterComponent}></Route>
            <Route path="/bookInfo/:id" component={BookInfo}></Route>
            <Route path="/userInfo" component={UserInfo}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
  

ReactDOM.render(<MainMain />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
