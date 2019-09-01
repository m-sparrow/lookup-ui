import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { teal } from '@material-ui/core/colors';


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
  },
  appBar: {
	backgroundColor: teal[50],
  }
});

class BoardMetaData extends Component {
			
	render(){
		const { classes } = this.props;
		return (
		<div className={classes.root}>
		  <AppBar position="static" color="default" className={classes.appBar} >
			<Toolbar>
			  <Typography variant="subtitle2" align='left' className={classes.title}>
					Board Name: {this.props.boardName }
			  </Typography>	
			  <Typography variant="subtitle2">
					Created By: {this.props.createdBy }
			  </Typography>	
			  </Toolbar>
		  </AppBar>		  
		 
		</div>
		);
	}	

	
}

BoardMetaData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoardMetaData);
