import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import orange from '../../assets/orange.jpg';
import classes from './Header.module.css';
import logo from '../../assets/logo1.webp'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={logo}/>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={orange} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
