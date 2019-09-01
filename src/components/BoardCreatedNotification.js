import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  button: {
    margin: theme.spacing(1),
  }
});

class BoardCreatedNotification extends Component {
	constructor(props) {
      super(props);
	 	  
	  this.handleClose = this.handleClose.bind(this);	  
	}
	
	handleClose() {
		this.props.onClose();
	}
	
	render(){
		const { classes } = this.props;
		return (
		<div className={classes.root}>
		  <AppBar position="static" color='default'>
			<Toolbar>
			  <Typography variant="subtitle2" className={classes.title} align='left'>
			  New Board created! Use Board ID: <u>{this.props.boardId}</u> to join discussion.
			  </Typography>	
			
			  <Button size="small" color="inherit" variant="outlined" onClick={this.handleClose} className={classes.button}>
					CLOSE
			  </Button>			 
				
			  </Toolbar>
		  </AppBar>		  
		 
		</div>
		);
	}	

	
}

BoardCreatedNotification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoardCreatedNotification);
