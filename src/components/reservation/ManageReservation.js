import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/reservation/reservationApi';
import useFetchReducer from '../../hooks/useFetch';
import { formatDatetime } from '../../utilities/utilities';

const ManageReservation = ({ buttons }) => {
  const { data, error, loading } = useFetchReducer(getAll);

  return (
    <section className='section-table'>
      {loading && <div>Cargando</div>}
      {data && (
        <table className='table'>
          <thead className='table__header'>
            <tr>
              <th className='table__header__item'>Id de reserva</th>
              <th className='table__header__item'>Fecha inicio</th>
              <th className='table__header__item'>Fecha fin</th>
              <th className='table__header__item'>Precio por dia</th>
              <th className='table__header__item'>Precio final</th>
              <th className='table__header__item'>Auto</th>
              <th className='table__header__item'>Usuario</th>
              {buttons && (<th className='table__header__item' ></th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td className='table__body__item'>{e.id}</td>
                <td className='table__body__item'>{formatDatetime(e.startDate, false)}</td>
                <td className='table__body__item'>{formatDatetime(e.finishDate, false)}</td>
                <td className='table__body__item'>{`$ ${e.pricePerDay}`}</td>
                <td className='table__body__item'>{`$ ${e.totalPrice}`}</td>
                <td className='table__body__item'>{`${e.car.model} ${e.car.brand}`}</td>
                <td className='table__body__item'>{`${e.user.firstName} ${e.user.lastName}`}</td>
                {buttons && (
                  <td className='table__body__item'>
                    <NavLink to={`/reservation/${e.id}/view`} className='table__body__item__button'>Ver</NavLink>
                    <NavLink to={`/reservation/${e.id}/edit`} className='table__body__item__button'>Editar</NavLink>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
}

export default ManageReservation;