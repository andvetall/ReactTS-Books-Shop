import React from 'react'
import './styles/register.component.css'
import { Redirect } from 'react-router';

export class RegisterComponent extends React.Component<any, any>{
    state: any = {
        login: "",
        email: "",
        password: "",
        passwordComfirm: "",
        image: ""
    };
    handle = (event: any) => this.setState({ [event.target.name]: event.target.value } as any);
    register = () => {
        const { doRegister } = this.props;
        doRegister({ 
            login: this.state.login, 
            email: this.state.email, 
            password: this.state.password,
            passwordComfirm: this.state.passwordComfirm
        }) 
             
    }
    
    render() {
        
        return (
           
            <div>
                {this.props.isRegistred ? 
                    <Redirect to='/login'/> :
                        null}
                <p>Register please</p>
                <div className="error">
                    {this.props.message}
                </div>
                <div className="reg-form">
                    
                    <input
                        required
                        type="text"
                        name="login"
                        value={this.state.login}
                        onChange={this.handle}
                        placeholder="login">
                    </input>
                    <input
                        required
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handle}
                        placeholder="email">
                    </input>
                    <input
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handle}>
                    </input>
                    <input
                        required
                        type="password"
                        placeholder="password comfirm"
                        name="passwordComfirm"
                        value={this.state.passwordComfirm}
                        onChange={this.handle}>
                    </input>
                    <button onClick={() => this.register()}>Register</button>
                

                </div>
            </div>
        )
    }
}