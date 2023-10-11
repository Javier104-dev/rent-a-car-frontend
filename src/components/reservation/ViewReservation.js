import { useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getReservation } from '../../api/reservation/reservationApi';

const ViewReservation = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getReservation, id);
  console.log(data);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <table>
          <tbody>
            <tr>
              <th>Id de reserva</th>
              <td>{data.id}</td>
            </tr>
            <tr>
              <th>Usuario</th>
              <td>{`${data.User.firstName} ${data.User.lastName}`}</td>
            </tr>
            <tr>
              <th>Auto</th>
              <td>{`${data.Car.model} ${data.Car.brand}`}</td>
            </tr>
            <tr>
              <th>Fecha de inicio</th>
              <td>{data.startDate}</td>
            </tr>
            <tr>
              <th>Fecha de finalizacion</th>
              <td>{data.finishDate}</td>
            </tr>
            <tr>
              <th>Precio por dia</th>
              <td>{data.pricePerDay}</td>
            </tr>
            <tr>
              <th>Precio total</th>
              <td>{data.totalPrice}</td>
            </tr>
            <tr>
              <th>Creado</th>
              <td>{data.createdAt}</td>
            </tr>
            <tr>
              <th>Ultima actualizacion</th>
              <td>{data.updatedAt}</td>
            </tr>
          </tbody>
        </table>
      )}
      {error && <div>{error}</div>}
    </section>
  );
};

export default ViewReservation;