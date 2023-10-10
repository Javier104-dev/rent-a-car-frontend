import getAll from '../../api/car/carApi';
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
              <th>Ksm</th>
              <th>Color</th>
              <th>Pasajeros</th>
              <th>Precio por dia</th>
            </tr>
            {data.map((e) => (
              <tr key={e.id}>
                <th>{e.id}</th>
                <th>{e.brand}</th>
                <th>{e.model}</th>
                <th>{e.year}</th>
                <th>{e.kms}</th>
                <th>{e.color}</th>
                <th>{e.passengers}</th>
                <th>{e.price}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Car;