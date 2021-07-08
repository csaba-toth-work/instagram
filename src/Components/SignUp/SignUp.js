import React, {Component} from 'react';
import './SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginPage_text" type="text" placeholder="Mobile Number or email" />
                <input className="loginPage_text" type="text" placeholder="Full Name" />
                <input className="loginPage_text" type="text" placeholder="Username" />
                <input className="loginPage_text" type="password" placeholder="Password" />
                <button className="login_button">Sign up</button>
            </div>
        );
    }
}

export default SignUp;