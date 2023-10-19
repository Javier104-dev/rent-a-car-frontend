import { useState } from 'react';
import { addRecord, setAttributes } from '../../utilities/utilities';
import { addCar } from '../../api/car/carApi';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
  const [formData, setData] = useState({
    brand: '',
    model: '',
    year: '',
    kms: '',
    color: '',
    passengers: '',
    price: ''
  })

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    addRecord(
      addCar,
      formData,
      'Auto agregado con exito',
      navigate,
      '/car/manage'
    );
  };

  return (
    <section className='section-add'>
      <form onSubmit={onSubmit} className='form'>
        <div className='form__title'>
          <h1 className='form__title__text'>Nuevo auto</h1>
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='brand'>Marca</label>
          <input
            className='form__div__input'
            id='brand'
            name='brand'
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData.price}
          />
        </div>
        <button className='form__button'>Agregar auto</button>
      </form>
    </section>
  );
};

export default AddCar;
