import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/reservation/add'>Nueva reserva</NavLink>
        </li>
        <li>
          <NavLink to='/reservation/manage'>Gestionar reservas</NavLink>
        </li>
        <li>
          <NavLink to='/user/add'>Nuevo usuario</NavLink>
        </li>
        <li>
          <NavLink to='/user/manage'>Gestionar usuarios</NavLink>
        </li>
        <li>
          <NavLink to='/car/add'>Agregar auto</NavLink>
        </li>
        <li>
          <NavLink to='/car/manage'>Gestionar autos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;