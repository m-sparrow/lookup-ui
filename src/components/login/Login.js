import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import Button from '@material-ui/core/Button';

class Login extends Component {
		
	login = () => {
		this.props.cbLogin();
	}
	
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to Insights</h2>
				</div>
				<p className="App-intro">
					<Button variant="contained" color="primary" onClick={this.login}>
						Login with Facebook
					</Button>
				</p>
			</div>
    );
  }
}

export default Login;
