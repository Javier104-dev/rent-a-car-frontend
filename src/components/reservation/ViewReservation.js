import { useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getReservation } from '../../api/reservation/reservationApi';
import { formatDatetime } from '../../utilities/utilities';

const ViewReservation = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getReservation, id);

  return (
    <section className='section-view'>
      {loading && <div>Cargando</div>}
      {data && (
        <table className='table-view'>
          <thead className='table-view__header'>
            <tr>
              <th className='table-view__header__title' colSpan={2}>
                {`Reserva de ${data.User.firstName} ${data.User.lastName}`}
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th className='table-view__header__item'>Id de reserva</th>
            <td className='table-view__body__item'>{data.id}</td>
          </tr>
          <tr>
            <th className='table-view__header__item'>Usuario</th>
            <td className='table-view__body__item'>{`${data.User.firstName} ${data.User.lastName} (Id: ${data.User.id})`}</td>
          </tr>
          <tr>
            <th className='table-view__header__item'>Auto</th>
            <td className='table-view__body__item'>{`${data.Car.model} ${data.Car.brand} (Id: ${data.Car.id})`}</td>
          </tr>
          <tr>
            <th className='table-view__header__item'>Fecha de inicio</th>
            <td className='table-view__body__item'>{formatDatetime(data.startDate, true)}</td>
          </tr>
          <tr>
            <th className='table-view__header__item'>Fecha de finalizacion</th>
            <td className='table-view__body__item'>{formatDatetime(data.finishDate, true)}</td>
          </tr>
          <tr>
            <th className='table-view__header__item'>Precio por dia</th>
            <td className='table-view__body__item'>{`$ ${data.pricePerDay}`}</td>
          </tr>
          <tr>
            <th className='table-view__header__item'>Precio total</th>
            <td className='table-view__body__item'>{`$ ${data.totalPrice}`}</td>
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

export default ViewReservation;