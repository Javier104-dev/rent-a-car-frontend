import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/user/userApi';
import useFetchReducer from '../../hooks/useFetch';
import { formatDatetime } from '../../utilities/utilities';

const ManageUser = () => {
  const { data, error, loading } = useFetchReducer(getAll);

  return (
    <section className='section-table'>
      {loading && <div>Cargando</div>}
      {data && (
        <table className='table'>
          <thead className='table__header'>
            <tr>
              <th className='table__header__item'>Id de usuario</th>
              <th className='table__header__item'>Nombre</th>
              <th className='table__header__item'>Apellido</th>
              <th className='table__header__item'>Nacionalidad</th>
              <th className='table__header__item'>Direccion</th>
              <th className='table__header__item'>Numero telefonico</th>
              <th className='table__header__item'>Correo electronico</th>
              <th className='table__header__item'>Fecha de nacimiento</th>
              <th className='table__header__item'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td className='table__body__item'>{e.id}</td>
                <td className='table__body__item'>{e.firstName}</td>
                <td className='table__body__item'>{e.lastName}</td>
                <td className='table__body__item'>{e.nationality}</td>
                <td className='table__body__item'>{e.address}</td>
                <td className='table__body__item'>{e.phoneNumber}</td>
                <td className='table__body__item'>{e.email}</td>
                <td className='table__body__item'>{formatDatetime(e.birthdate, false)}</td>
                <td className="table__body__item">
                    <NavLink to={`/user/${e.id}/view`} className='table__body__item__button'>Ver</NavLink>
                    <NavLink to={`/user/${e.id}/edit`} className='table__body__item__button'>Editar</NavLink>
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

export default ManageUser;