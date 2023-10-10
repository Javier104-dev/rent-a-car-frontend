import { getAll } from '../../api/user/userApi';
import useFetchReducer from '../../hooks/useFetch';

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
              <th>Email</th>
              <th>Fecha nacimiento</th>
            </tr>
            {data.map((e) => (
              <tr key={e.id}>
                <th>{e.id}</th>
                <th>{e.firstName}</th>
                <th>{e.lastName}</th>
                <th>{e.nationality}</th>
                <th>{e.address}</th>
                <th>{e.phoneNumber}</th>
                <th>{e.email}</th>
                <th>{e.birthdate}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <div>{error}</div>}
    </section>
  );
};

export default User;