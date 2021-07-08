import React, {Component} from 'react';
import '../LoginPage/LoginPage.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginPage_text" type="text" placeholder="Phone number, username or email" />
                <input className="loginPage_text" type="password" placeholder="Password" />
                <button className="login_button">Login</button>
            </div>
        );
    }
}

export default SignIn;