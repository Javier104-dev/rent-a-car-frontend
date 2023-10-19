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
    <section className='section-add'>
      {loading && <div>Cargando</div>}
      {data && (
        <form onSubmit={onSubmit} className='form'>
          <div className='form__title'>
            <h1 className='form__title__text'>{`Editar auto id: ${formData.id}`}</h1>
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='brand'>Marca</label>
            <input
              className='form__div__input'
              id='brand'
              name='brand'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.brand}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='model'>Modelo</label>
            <input
              className='form__div__input'
              id='model'
              name='model'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.model}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='year'>Año</label>
            <input
              className='form__div__input'
              type='number'
              id='year'
              name='year'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.year}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='kms'>Kms</label>
            <input
              className='form__div__input'
              type='number'
              id='kms'
              name='kms'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.kms}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='color'>Color</label>
            <input
              className='form__div__input'
              id='color'
              name='color'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.color}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='passengers'>Pasajeros</label>
            <input
              className='form__div__input'
              type='number'
              id='passengers'
              name='passengers'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.passengers}
            />
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='price'>Precio por dia</label>
            <input
              className='form__div__input'
              type='number'
              id='price'
              name='price'
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formData.price}
            />
          </div>
          <button type='submit' className='form__button'>Agregar auto</button>
        </form>
      )}
      {error && <div>Cargando</div>}
    </section>
  );
};

export default EditCar;
