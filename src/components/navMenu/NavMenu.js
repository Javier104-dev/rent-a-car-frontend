import { NavLink } from "react-router-dom";
import './nav-menu.css'

const NavMenu = () => {
  return (
    <nav className='nav-menu'>
      <ul className='nav-menu__list'>
        <NavLink to='/reservation/add'>
          <li className='nav-menu__list__item'>Nueva reserva</li>
        </NavLink>

        <NavLink to='/reservation/manage'>
          <li className='nav-menu__list__item'>Gestionar reservas</li>
        </NavLink>

        <NavLink to='/user/add'>
          <li className='nav-menu__list__item'>Nuevo usuario</li>
        </NavLink>

        <NavLink to='/user/manage'>
          <li className='nav-menu__list__item'>Gestionar usuarios</li>
        </NavLink>

        <NavLink to='/car/add'>
          <li className='nav-menu__list__item'>Nuevo auto</li>
        </NavLink>

        <NavLink to='/car/manage'>
          <li className='nav-menu__list__item'>Gestionar autos</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavMenu;