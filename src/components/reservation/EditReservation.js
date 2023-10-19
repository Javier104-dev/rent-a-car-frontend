import { useNavigate, useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { getReservation, makeReservation } from '../../api/reservation/reservationApi';
import { addRecord, formatDatetimeToInput, setAttributes } from '../../utilities/utilities';
import { getAll as getAllCar } from '../../api/car/carApi';
import { getAll as getAllUser} from '../../api/user/userApi';
import { useEffect, useState } from 'react';

const EditReservation = () => {
  const { id } = useParams();
  const { data: dataR, error: errorR, loading: loadingR } = useFetchReducer(getReservation, id);
  const { data: dataC, loading: loadingC } = useFetchReducer(getAllCar);
  const { data: dataU, loading: loadingU } = useFetchReducer(getAllUser);
  const [formData, setData] = useState({
    id: '',
    'start-date': '',
    'finish-date': '',
    'car-id': '',
    'user-id': '',
    'price-per-day': ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (dataR) setData({
        id: dataR.id,
        'start-date': dataR.startDate,
        'finish-date': dataR.finishDate,
        'car-id': dataR.Car.id,
        'user-id': dataR.User.id,
        'price-per-day': dataR.pricePerDay
      });
  }, [dataR]);

  const onSubmit = (e) =>{
    e.preventDefault();
    addRecord(
      makeReservation,
      formData,
      'Reserva editada con exito',
      navigate,
      `/reservation/${formData.id}/view`
    );
  }
  return (
    <section className='section-add'>
      {(loadingR || loadingC || loadingU) && <div>loading</div>}
      {(dataR && dataC && dataU) && (
        <form onSubmit={onSubmit} className='form'>
          <div className='form__title'>
            <h1 className='form__title__text'>{`Editar reserva de ${dataR.User.firstName} ${dataR.User.lastName}`}</h1>
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='start-date'>Fecha inicio</label>
            <input
              className='form__div__input'
              id='start-date'
              name='start-date'
              type='datetime-local'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formatDatetimeToInput(formData['start-date'], true)}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='finish-date'>Fecha fin</label>
            <input
              className='form__div__input'
              id='finish-date'
              name='finish-date'
              type='datetime-local'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formatDatetimeToInput(formData['finish-date'], true)}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='car-id'>Auto</label>
            <select
              className='form__div__input'
              id='car-id'
              name='car-id'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData['car-id']}
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
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='user-id'>Usuario</label>
            <select
              className='form__div__input'
              id='user-id'
              name='user-id'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData['user-id']}
            >
              {dataU.map((e)=> (
                <option
                  key={e.id}
                  value={e.id}
                >{`ID: ${e.id} Usuario: ${e.firstName} ${e.lastName} - ${e.email}`}</option>
              ))}
            </select>
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor="price-per-day">Precio por dia</label>
            <input
              className='form__div__input'
              id='price-per-day'
              name='price-per-day'
              type='number'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData['price-per-day']}
            />
          </div>
          <button type='submit' className='form__button'>Editar reservacion</button>
        </form>
      )}
      {errorR && <div>{errorR.message}</div>}
    </section>
  );
};

export default EditReservation;
