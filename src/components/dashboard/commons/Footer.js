import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FeedsIcon from '@material-ui/icons/EventNote';
import JoinIcon from '@material-ui/icons/RecordVoiceOver';
import MyBoardsIcon from '@material-ui/icons/Dashboard';
import MyProfileIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
   root: {
    width: '100%',
  },appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  return (
    <React.Fragment>
      <AppBar position="fixed" color="default" className={classes.appBar}>
       <BottomNavigation value={value} onChange={(event, newValue) => {
			setValue(newValue);
		  }}
		showLabels
		className={classes.root} >			
			<BottomNavigationAction component={Link} to="/" label="Home" icon={<JoinIcon />} />
			<BottomNavigationAction component={Link} to="/" label="Feeds" icon={<FeedsIcon />} />
			<BottomNavigationAction component={Link} to="/" label="My Boards" icon={<MyBoardsIcon />} />
			<BottomNavigationAction component={Link} to="/" label="Profile" icon={<MyProfileIcon />} />
		</BottomNavigation>
      </AppBar>
    </React.Fragment>
  );
}
