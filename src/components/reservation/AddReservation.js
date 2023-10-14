import { useState } from 'react';
import useFetchReducer from '../../hooks/useFetch';
import { getAll as getAllCar } from '../../api/car/carApi';
import { getAll as getAllUser } from '../../api/user/userApi';
import { useNavigate } from 'react-router-dom';
import { makeReservation } from '../../api/reservation/reservationApi';
import { addRecord, setAttributes } from '../../utilities/utilities';

const AddReservation = () => {
  const { data: dataCar, error: errorCar, loading: loadingCar } = useFetchReducer(getAllCar);
  const { data: dataUser, error: errorUser, loading: loadingUser } = useFetchReducer(getAllUser);
  const [formData, setData] = useState({
    'start-date': '',
    'finish-date': '',
    'car-id': '',
    'user-id': '',
  });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    addRecord(
      makeReservation,
      formData,
      'Reserva agrega con exito',
      navigate,
      '/reservation/manage'
    );
  };

  return (
    <section>
      {(loadingCar || loadingUser) && <div>Cargando</div>}
      {(dataCar && dataUser) && (
        <form onSubmit={onSubmit}>
          <label>Fecha inicio</label>
          <input
            name='start-date'
            type='datetime-local'
            onChange={(e) => setAttributes(e, setData, formData)}
          />

          <label>Fecha fin</label>
          <input
            name='finish-date'
            type='datetime-local'
            onChange={(e) => setAttributes(e, setData, formData)}
          />

          <label>Auto</label>
          <select
            name='car-id'
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData['car-id']}
            required
          >
            <option hidden>Seleccione un auto</option>
            {dataCar.map((e)=> (
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
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData['user-id']}
          >
            <option hidden>Seleccione un usuario</option>
            {dataUser.map((e)=> (
              <option
                key={e.id}
                value={e.id}
              >{`ID: ${e.id} Usuario: ${e.firstName} ${e.lastName} - ${e.email}`}</option>
            ))}
          </select>

          <div>
            <button type='submit'>Hacer reservacion</button>
          </div>
        </form>        
      )}

      {(errorCar && errorUser) && (
        <>
          <div>
            {errorCar.message}
          </div>
          <div>
            {errorUser.message}
          </div>  
        </>
      )}
    </section>
  );
};

export default AddReservation;