import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Headerstyle'


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root} position="sticky">
      <AppBar color="inherit" >
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            DEV
          </Typography>
          
          
          <Button>Login</Button>
          <Button color="primary" variant="contained">Create account</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
