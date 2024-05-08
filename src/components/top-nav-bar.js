import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Typography, Button, Grid, makeStyles } from '@material-ui/core';
import logo from '../logo.svg'; // Add this line to import the logo

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#0565C7', // replace #yourColor with your desired color
  },
  logo: {
    marginRight: '0px', // Adjust the margin as needed
    width: '60px', // Adjust the width as needed
  },
});

const TopNavBar = ({ setAuthStatus }) => { // Receive setAuthStatus as a prop
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const classes = useStyles();

  //console.log(user);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
            <a href={process.env.REACT_APP_BASE_URL} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" className={classes.logo} />
              <Typography variant="h6">YourNameHere.com</Typography>
            </a>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              {/* {!isAuthenticated && (
                <Grid item>
                  <Button variant="outlined" color="inherit" component={Link} to="/signup">Sign Up</Button>
                </Grid>
              )} */}
              {isAuthenticated && (
                <Grid item>
                  <Typography variant="subtitle1">
                    Welcome, {user.email}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                {isAuthenticated ? (
                  <Button variant="outlined" color="inherit" onClick={() => {
                    logout();
                    setAuthStatus(false); // Call setAuthStatus with false when logging out
                  }}>Logout</Button>
                ) : (
                  <Button variant="outlined" color="inherit" onClick={() => loginWithRedirect({ redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL })}>Sign In</Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
