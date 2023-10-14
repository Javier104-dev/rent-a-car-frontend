import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/user/userApi';
import useFetchReducer from '../../hooks/useFetch';
import { formatDate } from '../../utilities/utilities';

const User = () => {
  const { data, error, loading } = useFetchReducer(getAll);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <table>
          <tbody>
            <tr>
              <th>Id de usuario</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Nacionalidad</th>
              <th>Direccion</th>
              <th>Numero telefonico</th>
              <th>Correo electronico</th>
              <th>Fecha de nacimiento</th>
            </tr>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.nationality}</td>
                <td>{e.address}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.email}</td>
                <td>{formatDate(e.birthdate)}</td>
                <td className="estilos__tabla">
                    <NavLink to={`/user/${e.id}/view`}>Ver</NavLink>
                    <NavLink to={`/user/${e.id}/edit`}>Editar</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default User;