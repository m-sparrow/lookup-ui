import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  var user = localStorage.getItem('firebase_lookup_user');
  return (
	<Route
	  {...rest}
	  render={props =>	  
		(user != null) ? (
		  <Component {...props} />
		) : (
		  <Redirect
			to={{
			  pathname: '/login',
			  state: { from: props.location }
			}}
		  />
		)
	  }
	/>
  );
}