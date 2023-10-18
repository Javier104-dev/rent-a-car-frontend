import { useParams } from 'react-router-dom';
import { getUser } from '../../api/user/userApi';
import useFetchReducer from '../../hooks/useFetch';
import { formatDatetime } from '../../utilities/utilities';

const ViewUser = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getUser, id);

  return (
    <section className='section-view'>
      {loading && <div>Cargando</div>}
      {data && (
        <table className='table-view'>
          <thead className='table-view__header'>
            <tr>
              <th className='table-view__header__title' colSpan={2}>
                {`Usuario ${data.firstName} ${data.lastName}`}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='table-view__header__item'>Id de usuario</th>
              <td className='table-view__body__item'>{data.id}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Nombre</th>
              <td className='table-view__body__item'>{data.firstName}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Apellido</th>
              <td className='table-view__body__item'>{data.lastName}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Nacionalidad</th>
              <td className='table-view__body__item'>{data.nationality}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Direccion</th>
              <td className='table-view__body__item'>{data.address}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Numero telefonico</th>
              <td className='table-view__body__item'>{data.address}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Correo electronico</th>
              <td className='table-view__body__item'>{data.email}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Fecha de nacimiento</th>
              <td className='table-view__body__item'>{formatDatetime(data.birthdate, false)}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Creado</th>
              <td className='table-view__body__item'>{formatDatetime(data.createdAt, true)}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Ultima actualizacion</th>
              <td className='table-view__body__item'>{formatDatetime(data.updatedAt, true)}</td>
            </tr>
          </tbody>
        </table>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default ViewUser;
