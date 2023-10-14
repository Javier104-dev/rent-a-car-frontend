import { useParams } from 'react-router-dom';
import { getUser } from '../../api/user/userApi';
import useFetchReducer from '../../hooks/useFetch';
import { formatDatetime } from '../../utilities/utilities';

const ViewUser = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getUser, id);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <>
          <div>
            <h1>{`Usuario ${data.firstName} ${data.lastName}`}</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Id de usuario</th>
                <td>{data.id}</td>
              </tr>
              <tr>
                <th>Nombre</th>
                <td>{data.firstName}</td>
              </tr>
              <tr>
                <th>Apellido</th>
                <td>{data.lastName}</td>
              </tr>
              <tr>
                <th>Nacionalidad</th>
                <td>{data.nationality}</td>
              </tr>
              <tr>
                <th>Direccion</th>
                <td>{data.address}</td>
              </tr>
              <tr>
                <th>Numero telefonico</th>
                <td>{data.address}</td>
              </tr>
              <tr>
                <th>Correo electronico</th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th>Fecha de nacimiento</th>
                <td>{formatDatetime(data.birthdate, false)}</td>
              </tr>
              <tr>
                <th>Creado</th>
                <td>{formatDatetime(data.createdAt, true)}</td>
              </tr>
              <tr>
                <th>Ultima actualizacion</th>
                <td>{formatDatetime(data.updatedAt, true)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default ViewUser;
