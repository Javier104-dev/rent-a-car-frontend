import { useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getCar } from '../../api/car/carApi';
import { formatDatetime } from '../../utilities/utilities';

const ViewCar = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getCar, id);

  return (
    <section className='section-view'>
      {loading && <div>Cargando</div>}
      {data && (
        <table className='table-view'>
          <thead className='table-view__header'>
            <tr>
              <th className='table-view__header__title' colSpan={2}>
              {`Auto id: ${data.id}`}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='table-view__header__item'>Id de auto</th>
              <td className='table-view__body__item'>{data.id}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Marca</th>
              <td className='table-view__body__item'>{data.brand}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Modelo</th>
              <td className='table-view__body__item'>{data.model}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Año</th>
              <td className='table-view__body__item'>{data.year}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Kms</th>
              <td className='table-view__body__item'>{data.kms}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Color</th>
              <td className='table-view__body__item'>{data.color}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Pasajeros</th>
              <td className='table-view__body__item'>{data.passengers}</td>
            </tr>
            <tr>
              <th className='table-view__header__item'>Precio por dia</th>
              <td className='table-view__body__item'>{data.price}</td>
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
      {error && <div>Cargando</div>}
    </section>
  );
};

export default ViewCar;

// {
//   "id": 1,
//   "brand": "marca",
//   "model": "model",
//   "year": 1995,
//   "kms": 200,
//   "color": "azul",
//   "passengers": 4,
//   "price": 100,
//   "img": null,
//   "createdAt": "2023-10-14T21:11:42.000Z",
//   "updatedAt": "2023-10-14T21:11:42.000Z"
// }