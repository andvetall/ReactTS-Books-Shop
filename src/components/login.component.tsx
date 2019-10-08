import React from 'react'
import './styles/login.component.css'
import { Redirect } from 'react-router';

export class LoginComponent extends React.Component<any, any>{
    state: any = {
        email: "",
        password: ""
    };
    handle = (event: any) => this.setState({ [event.target.name]: event.target.value } as any);
    login = () => {
        const { doLogin } = this.props;
        doLogin({ email: this.state.email, password: this.state.password}) 
    }
    redirect = (path: string) => {
        this.props.history.push("/" + path)
    }
    
    render(){  
        return(
            <div>
            {
                this.props.data.permission !== "admin" ?
                    this.props.data.permission !== "user"? 
                        (
                            <div>
                            <p>Log-in please</p>
                            <div className="error">
                            {this.props.message}
                            </div>
                            <div className="log-form">
                                <input
                                    required
                                    type="text"
                                    name="email"
                                    onChange={this.handle}
                                    placeholder="email">
                                </input>
                                <input
                                    required
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    onChange={this.handle}>
                                </input>
                                <button onClick={() => this.login() }>Login</button>
                            </div>
                            </div>
                        ): <Redirect to="/home"/> : <Redirect to="/home-admin"/> 
            } 
    </div>
        )
    }
}
export default LoginComponent;