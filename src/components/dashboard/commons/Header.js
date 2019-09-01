import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/NoteAdd';
import JoinIcon from '@material-ui/icons/Flare';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';
import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  marginSpacing: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
	  backgroundColor: blue[500],
  },
  iconTheme: {
    margin: 10,
    width: 50,
    height: 30,
  },
  button: {
    margin: theme.spacing(1),
	flexDirection: 'column'
  }
  
});

class Header extends Component {
	constructor(props) {
      super(props);
	}
	
	logout = () => {
		this.props.cbLogout();
	}
	
	render(){
		const { classes } = this.props;
		return (
		<div className={classes.root}>
		  <AppBar position="static" className={classes.appBar}>
			<Toolbar>
				<Hidden mdDown>
					<Avatar src="/logo.png" className={classes.iconTheme} style={{ borderRadius: 5 }} />	
				</Hidden>
			    <Typography variant="h6" className={classes.title}>
					Lookup360
				</Typography>					
				
				<Tooltip title="Create New Board" aria-label="Create">
					<IconButton aria-label="Create" color="inherit">
						<CreateIcon fontSize="large" />
					</IconButton>
				</Tooltip>
				
				<Tooltip title="Join Board" aria-label="Join">
					<IconButton aria-label="Join" color="inherit">
						<JoinIcon fontSize="large" />
					</IconButton>
				</Tooltip>
				
				<Tooltip title="Logout" aria-label="Logout">
					<IconButton aria-label="Logout" color="inherit" onClick={this.logout}>
						<LogoutIcon fontSize="large" />
					</IconButton>
				</Tooltip>
				
		
			  </Toolbar>
		  </AppBar>
		</div>
		);
	}	

	
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
