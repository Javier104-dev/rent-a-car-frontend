import { NavLink } from 'react-router-dom';
import './header.css'
import NavMenu from '../navMenu/NavMenu';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__tittle'>
        <NavLink to='/' className={'header__tittle__text'}>Ren a car</NavLink>
      </h1>
      <NavMenu/>
    </header>
  );
};

export default Header;
