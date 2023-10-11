import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/reservation/reservationApi';
import useFetchReducer from '../../hooks/useFetch';

const Reservation = ({ buttons }) => {
  const { data, error, loading } = useFetchReducer(getAll);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <table>
          <tbody>
            <tr>
              <th>Id de reserva</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              <th>Precio por dia</th>
              <th>Precio final</th>
              <th>Auto</th>
              <th>Usuario</th>
            </tr>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.startDate}</td>
                <td>{e.finishDate}</td>
                <td>{`$ ${e.pricePerDay}`}</td>
                <td>{`$ ${e.totalPrice}`}</td>
                <td>{`${e.Car.model} ${e.Car.brand}`}</td>
                <td>{`${e.User.firstName} ${e.User.lastName}`}</td>
                {buttons && (
                  <td className="estilos__tabla">
                    <NavLink to={`/reservation/${e.id}/view`}>Ver</NavLink>
                    <NavLink to={`/reservation/${e.id}/edit`}>Editar</NavLink>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <div>{error}</div>}
    </section>
  );
}

export default Reservation;