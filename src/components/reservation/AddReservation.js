import { useState } from 'react';
import useFetchReducer from '../../hooks/useFetch';
import { getAll as getAllCar } from '../../api/car/carApi';
import { getAll as getAllUser } from '../../api/user/userApi';

const AddReservation = () => {
  const { data: dataCar, error: errorCar, loading: loadingCar } = useFetchReducer(getAllCar);
  const { data: dataUser, error: errorUser, loading: loadingUser } = useFetchReducer(getAllUser);
  console.log(dataUser);
  const [dataForm, setData] = useState({
    'start-date': '',
    'finish-date': '',
    'car-id': '',
    'user-id': '',
  });

  const setAttributes = (e) => {
    const { name, value } = e.target;
    setData({
      ...dataForm,
      [name] : value
    });
  };
  const pruebna = (evento) => {
    evento.preventDefault();
    console.log(dataForm);
  }
  return (
    <section>
      {(loadingCar && loadingUser) && <div>Cargando</div>}
      {(dataCar && dataUser) && (
        <form onSubmit={pruebna}>
          <label>Fecha inicio</label>
          <input
            name='start-date'
            type='datetime-local'
            onChange={setAttributes}
          />

          <label>Fecha fin</label>
          <input
            name='finish-date'
            type='datetime-local'
            onChange={setAttributes}
          />

          <label>Auto</label>
          <select
            name='car-id'
            onChange={setAttributes}
            value={dataForm['car-id']}
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
            onChange={setAttributes}
            value={dataForm['user-id']}
          >
            <option hidden>Seleccione un usuario</option>
            {dataUser.map((e)=> (
              <option
                key={e.id}
                value={e.id}
              >{
                `ID: ${e.id}
                Usuario: ${e.firstName} ${e.lastName}
                - ${e.email}`
              }</option>
            ))}            
          </select>

          <div>
            <button type='submit'>Hacer reservacion</button>
          </div>
        </form>        
      )}

      {(errorCar && errorUser) && <div>{errorCar}</div>}
    </section>
  );
};

export default AddReservation;