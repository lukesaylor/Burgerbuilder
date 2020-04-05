import React from 'react';
import burgerLogo from '../../Assets/Images/burgerlogo.png';
import classes from './Logo.css';


const logo =(props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="burger logo" />
    </div>
);

export default logo;