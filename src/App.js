import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { provider, auth } from './components/login/FirebaseInitializer';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';


class App extends Component {
	
	login = () => {
		auth().signInWithPopup(provider)
		.then(({ user }) => {
			window.location='/';
		}) 
	}
		
	 componentDidMount() {
		auth().onAuthStateChanged((user) => {
		  if (user) {
			localStorage.setItem('firebase_lookup_user', JSON.stringify(user));
		  } else {
			localStorage.setItem('firebase_lookup_user', null);
		  }
		});
	} 
	
	logout = () => {
		auth().signOut();
		localStorage.setItem('firebase_lookup_user', null);
		window.location='/login';
	}
	
	render() {
		return (
			  <div>
				<Router>
					<Switch>
						<Route exact path="/login" render={(props) => <Login {...props} cbLogin={this.login} /> } />
						<Route path="/app" render={(props) => <Dashboard {...props} cbLogout={this.logout}  />} />
						<Route render={() => <Redirect to={{pathname: "/app"}} />} />
					</Switch>
				</Router>
			  </div>
		)
  }
}
export default App