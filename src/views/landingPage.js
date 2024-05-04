import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
const heroImage = '/heroimage.jpeg'; // Use the public URL

const useStyles = makeStyles((theme) => ({
    landingPage: {
        fontFamily: 'Roboto, sans-serif',
        minHeight: `calc(100vh - 64px)`, // Subtract the height of the navigation bar from 100vh
        boxSizing: 'border-box',
        // color: theme.palette.text.primary,
        background: 'linear-gradient(180deg, #003e9b 0%, #006dd1 100%)',
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingTop: '5rem',
            paddingBottom: '5rem',
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: '7rem',
            paddingBottom: '12rem',
        },
        [theme.breakpoints.up('xl')]: {
            paddingTop: '7rem',
            paddingBottom: '12rem',
        },
        [theme.breakpoints.up('xxl')]: {
            paddingTop: '7rem',
            paddingBottom: '12rem',
        },
    },
    leftBox: {
        width: '100%',
        padding: '20px 30px 60px 30px',
        [theme.breakpoints.up('md')]: {
            padding: '0 30px 80px 30px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '45%',
            marginLeft: '4rem',
        },
        [theme.breakpoints.up('xl')]: {
            width: '40%',
            marginLeft: '5rem',
        },
        [theme.breakpoints.up('xxl')]: {
            width: '50%',
            marginLeft: '7rem',
        },
    },
    main: {
        padding: theme.spacing(2),
    },
    hero: {
        textAlign: 'center',
        marginBottom: theme.spacing(5),
    },
    marketingCopy: {
        lineHeight: 1.5,
        textAlign: 'center',
    },
    leverage: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: '400',
        marginBottom: '10px',
    },
    virtualIntelligence: {
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '10px',
    },
    info: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: '400',
        marginBottom: '20px',
    },
    startedButton: {
        background: '#fff',
        color: '#006dd1',
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        '&:hover': {
            background: '#006dd1',
            color: '#fff',
        },
    },
    startedButtonText: {
        fontSize: '1.2rem',
        fontWeight: '700',
    },
    rightBox: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '55%',
        },
    },
    phoneContainer: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '80%',
        },
    },
    phoneImage: {
        width: '100%',
        borderRadius: '10px',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },

}));

const LandingPage = () => {
    const classes = useStyles();
    const { loginWithRedirect } = useAuth0(); // Destructure loginWithRedirect from the useAuth0 hook

    return (
        <div className={classes.flexColRelative}>
            <div className={`${classes.landingPage} ${classes.flexRow}`}> 
                <div className={`${classes.leftBox} ${classes.flexColCenter}`}>
                    <p className={classes.leverage}>Leverage the power of</p>
                    <h1 className={classes.virtualIntelligence}>
                        whatever it is you do
                    </h1>
                    <p className={classes.info}>
                        The best place around to do that thing you do.
                    </p>
                    <button 
                            className={`${classes.startedButton} ${classes.flexCenter}`}
                            onClick={() => loginWithRedirect({ redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL })} // Add the onClick handler to the button
                        >
                            <p className={classes.startedButtonText}>Get Started</p>
                    </button>
                </div>
                <div className={`${classes.rightBox} ${classes.flexColCenter}`}>
                    <div className={`${classes.phoneContainer} ${classes.flexRowCenter}`}>
                        <img
                            className={classes.phoneImage}
                            src={heroImage} // Use the public URL as the src
                            alt="Hero Image"
                        />
                    </div>
                </div>
            
        </div>
    </div>
        
    );
};

export default LandingPage;
