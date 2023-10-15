import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/car/carApi';
import useFetchReducer from '../../hooks/useFetch';

const Car = () => {
  const { data, error, loading } = useFetchReducer(getAll);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <table>
          <tbody>
            <tr>
              <th>Id auto</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Kms</th>
              <th>Color</th>
              <th>Pasajeros</th>
              <th>Precio por dia</th>
            </tr>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.brand}</td>
                <td>{e.model}</td>
                <td>{e.year}</td>
                <td>{e.kms}</td>
                <td>{e.color}</td>
                <td>{e.passengers}</td>
                <td>{e.price}</td>
                <td>
                  <NavLink to={`/car/${e.id}/view`}>Ver</NavLink>
                  <NavLink to={`/car/${e.id}/edit`}>Editar</NavLink>
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

export default Car;