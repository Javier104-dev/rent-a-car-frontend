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
    <section>
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
    </section>
  );
};

export default AddCar;
