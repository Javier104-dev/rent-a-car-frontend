import { useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getReservation } from '../../api/reservation/reservationApi';
import { formatDate } from '../../utilities/utilities';

const ViewReservation = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getReservation, id);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <>
          <div>
            <h1>{`Reserva de ${data.User.firstName} ${data.User.lastName}`}</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Id de reserva</th>
                <td>{data.id}</td>
              </tr>
              <tr>
                <th>Usuario</th>
                <td>{`${data.User.firstName} ${data.User.lastName} (Id: ${data.User.id})`}</td>
              </tr>
              <tr>
                <th>Auto</th>
                <td>{`${data.Car.model} ${data.Car.brand} (Id: ${data.Car.id})`}</td>
              </tr>
              <tr>
                <th>Fecha de inicio</th>
                <td>{formatDate(data.startDate, true)}</td>
              </tr>
              <tr>
                <th>Fecha de finalizacion</th>
                <td>{formatDate(data.finishDate, true)}</td>
              </tr>
              <tr>
                <th>Precio por dia</th>
                <td>{`$ ${data.pricePerDay}`}</td>
              </tr>
              <tr>
                <th>Precio total</th>
                <td>{`$ ${data.totalPrice}`}</td>
              </tr>
              <tr>
                <th>Creado</th>
                <td>{formatDate(data.createdAt, true)}</td>
              </tr>
              <tr>
                <th>Ultima actualizacion</th>
                <td>{formatDate(data.updatedAt, true)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default ViewReservation;