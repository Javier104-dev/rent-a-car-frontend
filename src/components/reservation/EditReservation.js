import { useNavigate, useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getReservation, makeReservation } from '../../api/reservation/reservationApi';
import { addRecord, dateToInput } from '../../utilities/utilities';
import { getAll as getAllCar } from '../../api/car/carApi';
import { getAll as getAllUser} from '../../api/user/userApi';
import { useEffect, useState } from 'react';

const EditReservation = () => {
  const { id } = useParams();
  const { data: dataR, error: errorR, loading: loadingR } = useFetchReducer(getReservation, id);
  const { data: dataC, loading: loadingC } = useFetchReducer(getAllCar);
  const { data: dataU, loading: loadingU } = useFetchReducer(getAllUser);
  const [dataForm, setData] = useState({
    id: '',
    'start-date': '',
    'finish-date': '',
    'car-id': '',
    'user-id': '',
    'price-per-day': ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (dataR) {
      setData({
        id: dataR.id,
        'start-date': dataR.startDate,
        'finish-date': dataR.finishDate,
        'car-id': dataR.Car.id,
        'user-id': dataR.User.id,
        'price-per-day': dataR.pricePerDay
      });
    }
  }, [dataR]);

  const setAttributes = (e) => {
    const { name, value } = e.target;
    setData({
      ...dataForm,
      [name] : value
    });
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    addRecord(
      makeReservation,
      dataForm,
      'Reserva editada con exito',
      navigate,
      `/reservation/${dataForm.id}/view`
    );
  }
  return (
    <section>
      {(loadingR || loadingC || loadingU) && <div>loading</div>}
      {(dataR && dataC && dataU) && (
        <>
          <div>
            <h1>{`Editar reserva de ${dataR.User.firstName} ${dataR.User.lastName}`}</h1>
          </div>
          <form onSubmit={onSubmit}>
            <label>Fecha inicio</label>
            <input
              name='start-date'
              type='datetime-local'
              onChange={setAttributes}
              value={dateToInput(dataForm['start-date'])}
            />

            <label>Fecha fin</label>
            <input
              name='finish-date'
              type='datetime-local'
              onChange={setAttributes}
              value={dateToInput(dataForm['finish-date'])}
            />
            <label>Auto</label>

            <select
              name='car-id'
              onChange={setAttributes}
              value={dataForm['car-id']}
            >
              {dataC.map((e)=> (
                <option
                  key={e.id}
                  value={e.id}
                >{
                  `ID: ${e.id} 
                  - Precio: ${e.price}
                  - Marca: ${e.brand}
                  - Modelo: ${e.model}
                  - Color: ${e.color}
                  - Asientos: ${e.passengers}`
                }</option>
              ))}
            </select>

            <label>Usuario</label>
            <select
              name='user-id'
              onChange={setAttributes}
              value={dataForm['user-id']}
            >
              {dataU.map((e)=> (
                <option
                  key={e.id}
                  value={e.id}
                >{`ID: ${e.id} Usuario: ${e.firstName} ${e.lastName} - ${e.email}`}</option>
              ))}
            </select>

            <label htmlFor="price-per-day">Precio por dia</label>
            <input
              id='price-per-day'
              name='price-per-day'
              type='number'
              onChange={setAttributes}
              value={dataForm['price-per-day']}
            />

            <div>
              <button type='submit'>Editar reservacion</button>
            </div>
          </form>
        </>
      )}
      {errorR && <div>{errorR.message}</div>}
    </section>
  );
};

export default EditReservation;
