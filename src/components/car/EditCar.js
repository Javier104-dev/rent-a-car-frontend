import { useNavigate, useParams } from 'react-router-dom';
import useFetchReducer from '../../hooks/useFetch';
import { addCar, getCar } from '../../api/car/carApi';
import { useEffect, useState } from 'react';
import { addRecord, setAttributes } from '../../utilities/utilities';

const EditCar = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getCar, id);
  const [formData, setData] = useState({
    id: '',
    brand: '',
    model: '',
    year: '',
    kms: '',
    color: '',
    passengers: '',
    price: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data) setData({
      id: data.id,
      brand: data.brand,
      model: data.model,
      year: data.year,
      kms: data.kms,
      color: data.color,
      passengers: data.passengers,
      price: data.price
    });
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    addRecord(
      addCar,
      formData,
      'Auto editado con exito',
      navigate,
      '/car/manage'
    );
  }

  return (
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <>
          <div>
            <h1>{`Editar auto id: ${formData.id}`}</h1>
          </div>
          <form onSubmit={onSubmit}>
            <label>Marca</label>
            <input
              name='brand'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.brand}
            />

            <label>Modelo</label>
            <input
              name='model'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.model}
            />

            <label>Año</label>
            <input
              type='number'
              name='year'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.year}
            />

            <label>Kms</label>
            <input
              type='number'
              name='kms'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.kms}
            />

            <label>Color</label>
            <input
              name='color'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.color}
            />

            <label>Pasajeros</label>
            <input
              type='number'
              name='passengers'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.passengers}
            />

            <label>Precio por dia</label>
            <input
              type='number'
              name='price'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.price}
            />

            <div>
              <button>Agregar auto</button>
            </div>
          </form>
        </>
      )}
      {error && <div>Cargando</div>}
    </section>
  );
};

export default EditCar;
