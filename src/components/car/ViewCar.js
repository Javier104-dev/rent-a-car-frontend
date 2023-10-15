import { useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getCar } from '../../api/car/carApi';
import { formatDatetime } from '../../utilities/utilities';

const ViewCar = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getCar, id);

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <>
          <div>
            <h1>{`Auto id: ${data.id}`}</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Id de auto</th>
                <td>{data.id}</td>
              </tr>
              <tr>
                <th>Marca</th>
                <td>{data.brand}</td>
              </tr>
              <tr>
                <th>Modelo</th>
                <td>{data.model}</td>
              </tr>
              <tr>
                <th>Año</th>
                <td>{data.year}</td>
              </tr>
              <tr>
                <th>Kms</th>
                <td>{data.kms}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{data.color}</td>
              </tr>
              <tr>
                <th>Pasajeros</th>
                <td>{data.passengers}</td>
              </tr>
              <tr>
                <th>Precio por dia</th>
                <td>{data.price}</td>
              </tr>
              <tr>
                <th>Creado</th>
                <td>{formatDatetime(data.createdAt, true)}</td>
              </tr>
              <tr>
                <th>Ultima actualizacion</th>
                <td>{formatDatetime(data.updatedAt, true)}</td>
              </tr>
            </tbody>
          </table>
        </>
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