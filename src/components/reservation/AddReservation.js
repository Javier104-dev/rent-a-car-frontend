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
console.log(dataCar);
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
    <section className='section-add'>
      {(loadingCar || loadingUser) && <div>Cargando</div>}
      {(dataCar && dataUser) && (
        <form onSubmit={onSubmit} className='form'>
          <div className='form__title'>
            <h1 className='form__title__text'>Nueva reserva</h1>
          </div>
          
          <div className='form__div'>
            <label className='form__div__label' htmlFor='start-date'>Fecha inicio</label>
            <input
              className='form__div__input'
              id='start-date'
              name='start-date'
              type='datetime-local'
              required
              onChange={(e) => setAttributes(e, setData, formData)}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='finish-date'>Fecha fin</label>
            <input
              className='form__div__input'
              id='finish-date'
              name='finish-date'
              type='datetime-local'
              required
              onChange={(e) => setAttributes(e, setData, formData)}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='car-id'>Auto</label>
            <select
              className='form__div__input'
              id='car-id'
              name='car-id'
              required
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData['car-id']}
            >
              <option value='' hidden>Seleccione un auto</option>
              {dataCar.map((e)=> (
                <option
                  key={e.id}
                  value={e.id}
                >{
                  `ID: ${e.id} 
                  - Precio: $ ${e.price}
                  - Marca: ${e.brand}
                  - Modelo: ${e.model}
                  - Color: ${e.color}
                  - Asientos: ${e.passengers}`
                }</option>
              ))}
            </select>
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='user-id'>Usuario</label>
            <select
              className='form__div__input'
              id='user-id'
              name='user-id'
              required
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData['user-id']}
            >
              <option value='' hidden>Seleccione un usuario</option>
              {dataUser.map((e)=> (
                <option
                  key={e.id}
                  value={e.id}
                >{`ID: ${e.id} Usuario: ${e.firstName} ${e.lastName} - ${e.email}`}</option>
              ))}
            </select>
          </div>
          <button type='submit' className='form__button'>Hacer reservacion</button>
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