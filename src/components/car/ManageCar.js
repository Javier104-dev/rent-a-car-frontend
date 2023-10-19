import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/car/carApi';
import useFetchReducer from '../../hooks/useFetch';

const ManageCar = () => {
  const { data, error, loading } = useFetchReducer(getAll);

  return (
    <section className='section-table'>
      {loading && <div>Cargando</div>}
      {data && (
        <table className='table'>
          <thead className='table__header'>
            <tr>
              <th className='table__header__item'>Id auto</th>
              <th className='table__header__item'>Marca</th>
              <th className='table__header__item'>Modelo</th>
              <th className='table__header__item'>Año</th>
              <th className='table__header__item'>Kms</th>
              <th className='table__header__item'>Color</th>
              <th className='table__header__item'>Pasajeros</th>
              <th className='table__header__item'>Precio por dia</th>
              <th className='table__header__item'></th>
            </tr>
          </thead>  
            <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td className='table__body__item'>{e.id}</td>
                <td className='table__body__item'>{e.brand}</td>
                <td className='table__body__item'>{e.model}</td>
                <td className='table__body__item'>{e.year}</td>
                <td className='table__body__item'>{e.kms}</td>
                <td className='table__body__item'>{e.color}</td>
                <td className='table__body__item'>{e.passengers}</td>
                <td className='table__body__item'>{`$ ${e.price}`}</td>
                <td className='table__body__item'>
                  <NavLink to={`/car/${e.id}/view`} className='table__body__item__button'>Ver</NavLink>
                  <NavLink to={`/car/${e.id}/edit`} className='table__body__item__button'>Editar</NavLink>
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

export default ManageCar;