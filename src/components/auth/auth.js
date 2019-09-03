import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';
import axios from 'axios';

class Auth extends Component {
    constructor(props){
        super(props)
    }

    register = () => {
        const {registerEmail, registerPass, reenterRegisterPass, registerUsername} = this.props;

        registerEmail.length === 0 || registerPass.length === 0 ||reenterRegisterPass.length === 0 || registerUsername.length === 0
        ? window.alert('Please fill out all fields before submitting')
        : registerEmail.split('@').length !== 2 
        ? window.alert('Please enter a valid email address')
        : registerPass !== reenterRegisterPass 
        ? window.alert('Please ensure passwords match')
        : axios.post('/api/add_user', {email: registerEmail, username: registerUsername, password: registerPass})
            .then( results => {
                this.props.setInputs('', 'SET_REGISTER_EMAIL', 'registerEmail');
                this.props.setInputs('', 'SET_REGISTER_USERNAME', 'registerUsername');
                this.props.setInputs('', 'SET_REGISTER_PASS', 'registerPass');
                this.props.setInputs('', 'SET_REENTER_REGISTER_PASS', 'reenterRegisterPass');
                window.alert(results.data)
            })
            .catch( err => {
                window.alert(err)
            })
    }

    login = () => {
        const {loginUsername, loginPassword} = this.props;

        loginUsername.length === 0 || loginPassword.length === 0
        ? window.alert('Please enter username and password to login')
        : axios.post('/api/login_user', {username: loginUsername, password: loginPassword})
            .then( results => {
                if (results.data === 'username or password is incorrect') {
                    window.alert(results.data)
                } else {
                    this.props.setInputs('', 'SET_LOGIN_USERNAME', 'loginUsername');
                    this.props.setInputs('', 'SET_LOGIN_PASSWORD', 'loginPassword');
                    this.props.history.push('/main');
                }
            })
            .catch( err => {
                window.alert(err)
            })
    }

    render () {
        let loginOrRegisterBox = this.props.loginOrRegister === 'login' 
        ? <div className={this.props.mobile ? 'loginBoxMobile' : 'loginBox'}>
            <h3>Please log in to get started</h3>
            <div>
                <div>
                    <p>Username:</p>
                    <input 
                        value={this.props.loginUsername}
                        onChange={e => this.props.setInputs(e.target.value, 'SET_LOGIN_USERNAME', 'loginUsername')}
                    />
                </div>
                <div>
                    <p>Password:</p>
                    <input 
                        type='password'
                        value={this.props.loginPassword}
                        onChange={e => this.props.setInputs(e.target.value, 'SET_LOGIN_PASSWORD', 'loginPassword')}
                    />
                </div>
            </div>
            <div onClick={() => this.login()}>Login</div>
            <p>Don't have an account yet? Register below!</p>
            <div onClick={() => this.props.setLoginOrRegister('register')}>Register</div>
        </div>
        : this.props.loginOrRegister === 'register' 
        ? <div>
            <h3>Please complete all fields below to register</h3>
            <div>
                <div>
                    <p>Email:</p>
                    <input 
                        value={this.props.registerEmail} 
                        onChange={e => this.props.setInputs(e.target.value, 'SET_REGISTER_EMAIL', 'registerEmail')}
                    />
                </div>
                <div>
                    <p>Username:</p>
                    <input 
                        value={this.props.registerUsername} 
                        onChange={e => this.props.setInputs(e.target.value, 'SET_REGISTER_USERNAME', 'registerUsername')}
                    />
                </div>
                <div>
                    <p>Password:</p>
                    <input 
                        type='password' 
                        value={this.props.registerPass} 
                        onChange={e => this.props.setInputs(e.target.value, 'SET_REGISTER_PASS', 'registerPass')} 
                    />
                </div>
                <div>
                    <p>Re-enter password:</p>
                    <input 
                        type='password'
                        value={this.props.reenterRegisterPass} 
                        onChange={e => this.props.setInputs(e.target.value, 'SET_REENTER_REGISTER_PASS', 'reenterRegisterPass')} 
                    />
                </div>
                <div>{this.props.registerPass.length === 0 || this.props.reenterRegisterPass.length === 0
                    ? <p></p>
                    : this.props.registerPass !== this.props.reenterRegisterPass 
                    ? <p style={{color: 'red', fontSize: '10px'}}>Passwords do not match</p>
                    : <p style={{color: 'limegreen', fontSize: '10px'}}>Passwords match!</p>}
                </div>
            </div>
            <div onClick={() => this.register()}>Submit</div>
            <div onClick={() => this.props.setLoginOrRegister('login')}>Back to login</div>
        </div>
        : <div></div>
        return (
            <div>
                {loginOrRegisterBox}
            </div>
        )
    }
}

export default connect(state => state, Actions)(Auth);