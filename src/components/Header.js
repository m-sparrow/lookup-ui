import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


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
  appBar: {
	  backgroundColor: blue[300],
  },
  avatar: {
    margin: 10,
  },
  button: {
    margin: theme.spacing(1),
  }
});

class Header extends Component {
	constructor(props) {
      super(props);
	  this.yourName = React.createRef();
	  this.boardName = React.createRef();
	  this.state = {
		  OpenCreateWindow: false,
		  OpenJoinWindow: false,
		  yourName: localStorage.getItem('myName') || '',
		  boardName: '',
		  boardId: ''
	  }
	  
	  this.createBoard = this.createBoard.bind(this);
	  this.joinBoard = this.joinBoard.bind(this);	  
	  this.handleOpenCreateWindow = this.handleOpenCreateWindow.bind(this);
	  this.handleCloseCreateWindow = this.handleCloseCreateWindow.bind(this);
	  this.handleOpenJoinWindow = this.handleOpenJoinWindow.bind(this);
	  this.handleCloseJoinWindow = this.handleCloseJoinWindow.bind(this);	  
	}
	
	handleOpenCreateWindow() {
		this.setState({OpenCreateWindow: true});
	}

	handleCloseCreateWindow() {
		this.setState({OpenCreateWindow: false});
	}
	
	handleOpenJoinWindow() {
		this.setState({OpenJoinWindow: true});
	}

	handleCloseJoinWindow() {
		this.setState({OpenJoinWindow: false});
	}
	
	createBoard() {
		localStorage.setItem('myName', this.state.yourName)
		var msg = {
			'action' : 'create-board',
			'body': {
				'boardName': `${this.state.boardName}`,
				'createdBy': `${this.state.yourName}`
			}
		}
		
		this.props.messenger(JSON.stringify(msg));
		this.setState({OpenCreateWindow: false});
		
	}
	
	joinBoard() {
		localStorage.setItem('myName', this.state.yourName)
		var msg = {
			'action' : 'join-board',
			'body': {
				'boardID': `${this.state.boardId}`,
				'participant': `${this.state.yourName}`
			}
		}
		
		this.props.messenger(JSON.stringify(msg));
		this.setState({OpenJoinWindow: false});
		
	}	
	
	render(){
		const { classes } = this.props;
		return (
		<div className={classes.root}>
		  <AppBar position="static" className={classes.appBar}>
			<Toolbar>
			  <Typography variant="h6" className={classes.title} align='left'>
				Insights
			  </Typography>	
			
			  <Button size="small" color="inherit" variant="outlined" onClick={this.handleOpenCreateWindow} className={classes.button}>
					CREATE BOARD
			  </Button>	
			
			  <Button size="small" color="inherit" variant="outlined" onClick={this.handleOpenJoinWindow} className={classes.button}>
					JOIN
			  </Button>
				
			  </Toolbar>
		  </AppBar>
		  
		  <Dialog open={this.state.OpenCreateWindow} onClose={this.handleCloseCreateWindow} aria-labelledby="form-dialog-title">
				<DialogContent>
				  <TextField
					autoFocus
					margin="dense"
					label="Your Name"
					defaultValue={this.state.yourName}
					fullWidth
					onChange={event => {
								const { value } = event.target;
								this.setState({ yourName: value });
					}}
				  />
				  <TextField
					margin="dense"
					label="Board Name"
					fullWidth
					onChange={event => {
								const { value } = event.target;
								this.setState({ boardName: value });
					}}
				  />
				</DialogContent>
				<DialogActions>
				  <Button onClick={this.handleCloseCreateWindow} color="primary">
					CANCEL
				  </Button>	
				  <Button onClick={this.createBoard} color="primary" >
					CREATE
				  </Button>					  
				</DialogActions>
			  </Dialog>
			  
			  <Dialog open={this.state.OpenJoinWindow} onClose={this.handleCloseJoinWindow} aria-labelledby="form-dialog-title">
				<DialogContent>
				  <TextField
					autoFocus
					margin="dense"
					label="Your Name"
					defaultValue={this.state.yourName}
					fullWidth
					onChange={event => {
								const { value } = event.target;
								this.setState({ yourName: value });
					}}
				  />
				  <TextField
					margin="dense"
					label="Board ID"
					fullWidth
					onChange={event => {
								const { value } = event.target;
								this.setState({ boardId: value });
					}}
				  />
				</DialogContent>
				<DialogActions>
				  <Button onClick={this.handleCloseJoinWindow} color="primary">
					CANCEL
				  </Button>	
				  <Button onClick={this.joinBoard} color="primary" >
					JOIN
				  </Button>					  
				</DialogActions>
			  </Dialog>
		</div>
		);
	}	

	
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
