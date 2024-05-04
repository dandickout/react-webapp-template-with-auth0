import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  leftNavBar: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    backgroundColor: '#0565C7', // replace #yourColor with your desired color
    height: '100vh', // set the height to 100% of the viewport height
    minWidth: '200px',
  },
  button: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    width: '100%', // add this line
  },
  link: {
    textDecoration: 'none', // remove the underline from the links
    display: 'flex',
  },
}));

function LeftNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.leftNavBar}>
      <Link to="/dashboard" className={classes.link}>
        <Button variant="outlined" color="inherit" className={classes.button}>Dashboard</Button>
      </Link>
      <Link to="/about" className={classes.link}>
        <Button variant="outlined" color="inherit" className={classes.button}>About</Button>
      </Link>
    </div>
  );
}

export default LeftNavBar;
