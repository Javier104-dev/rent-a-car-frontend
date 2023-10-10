import { getAll } from '../../api/reservation/reservationApi';
import useFetchReducer from '../../hooks/useFetch';

const Reservation = () => {
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
                <th>{e.id}</th>
                <th>{e.startDate}</th>
                <th>{e.finishDate}</th>
                <th>{`$ ${e.pricePerDay}`}</th>
                <th>{`$ ${e.totalPrice}`}</th>
                <th>{`${e.Car.model} ${e.Car.brand}`}</th>
                <th>{`${e.User.firstName} ${e.User.lastName}`}</th>
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