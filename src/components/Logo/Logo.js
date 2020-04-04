import React from 'react';
import burgerLogo from '../../Assets/Images/burgerlogo.png';
import classes from './Logo.css';


const logo =(props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="burger logo" />
    </div>
);

export default logo;