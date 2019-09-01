import React, { Component } from 'react';

import Header from './commons/Header';
import Footer from './commons/Footer';
import CreateBoard from './features/CreateBoard';
import JoinBoard from './features/JoinBoard';
import MyBoards from './features/MyBoards';
import Profile from './features/Profile';
import PrivateRoute from'./utils/PrivateRoute';

class Dashboard extends Component {
	
	render() {

		return (
			<div>
				<Header cbLogout={this.props.cbLogout}/>					
					<PrivateRoute exact path='/app/board/:boardID' component={JoinBoard} />
					<PrivateRoute exact path='/app/my-boards' component={MyBoards} />
					<PrivateRoute exact path='/app/my-profile' component={Profile} />					
					<PrivateRoute exact path='/app' component={CreateBoard} />						
				<Footer />			
      </div>
    );
  }
}

export default Dashboard;
