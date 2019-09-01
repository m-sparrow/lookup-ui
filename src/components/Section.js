import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


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
  paper: {
	margin: theme.spacing(2,0),
	height: 40,
    width: 240,
  }, card: {
    margin: theme.spacing(1, 0),
  },
  
});

class Section extends Component {
	constructor(props) {
      super(props);	 
		this.state = {
		  OpenPostCardsWindow: false,	 
		  message: ''
		}
		
		this.handleOpenPostCardsWindow = this.handleOpenPostCardsWindow.bind(this);
		this.handleClosePostCardsWindow = this.handleClosePostCardsWindow.bind(this);
		this.postCard = this.postCard.bind(this);		
	}
	
	handleOpenPostCardsWindow() {
		this.setState({OpenPostCardsWindow: true});
	}

	handleClosePostCardsWindow() {
		this.setState({OpenPostCardsWindow: false});
	}
	
	postCard() {
		var msg = {
			'action' : 'post-cards',
			'body': {
				'boardID': `${this.props.boardInViewID}`,
				'sectionID' : `${this.props.sectionID}`,
				'message': `${this.state.message}`,
				'createdBy': `${localStorage.getItem('myName')}`
			}
		}
		
		this.props.messenger(JSON.stringify(msg));
		this.setState({OpenPostCardsWindow: false});
		
	}
		
	render(){
		const { classes } = this.props;
		return (
		<div className={classes.root}>
		<AppBar position="static" color="default">
			<Toolbar>
		
				<Typography variant="button" className={classes.title} align='left'>
					{this.props.sectionName }
			  </Typography>	
		 
			  
			  <Fab color="secondary" size="small" aria-label="Add" className={classes.fabButton} onClick={this.handleOpenPostCardsWindow}>
					<AddIcon />
				</Fab>
				
			</Toolbar>
		  </AppBar>	
		  
		  
			{
				(this.props.posts || []).map(item => (
					<Card key={item.postID} className={classes.card} spacing={2}>
					  <CardContent justify="left">
						<Typography variant="body2" component="p" align="left">
						  {item.message}
						  
						</Typography>
					  </CardContent>
					  <CardActions>
						<Button size="small">Posted By: {item.createdBy}</Button>
					  </CardActions>
					</Card>
				))
			}	
			
			
	
			
							
			
			<Dialog open={this.state.OpenPostCardsWindow} onClose={this.handleClosePostCardsWindow} aria-labelledby="form-dialog-title">
				<DialogContent>
				  <TextField
					autoFocus
					margin="dense"
					label="Message"
					multiline
					rows="4"
					variant="outlined"
					fullWidth
					onChange={event => {
								const { value } = event.target;
								this.setState({ message: value });
					}}
				  />
				 </DialogContent>
				<DialogActions>
				  <Button onClick={this.handleClosePostCardsWindow} color="primary">
					CANCEL
				  </Button>	
				  <Button onClick={this.postCard} color="primary" >
					POST
				  </Button>					  
				</DialogActions>
			  </Dialog>
		  		 
		</div>
		);
	}	

	
}

Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
