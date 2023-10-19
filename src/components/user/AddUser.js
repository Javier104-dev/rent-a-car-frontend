import { useState } from 'react';
import { addRecord, setAttributes } from '../../utilities/utilities';
import { addUser } from '../../api/user/userApi';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [formData, setData] = useState({
    'first-name': '',
    'last-name': '',
    nationality: '',
    address: '',
    'phone-number': '',
    email: '',
    birthdate: ''
  });

  const navigate = useNavigate();

  const onSubmit = (e) =>{
    e.preventDefault()
    addRecord(
      addUser,
      formData,
      'Usuario agregado con exito',
      navigate,
      '/user/manage'
    );
  }

  return(
    <section className='section-add'>
      <form onSubmit={onSubmit} className='form'>
        <div className='form__title'>
          <h1 className='form__title__text'>Nuevo usuario</h1>
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='first-name'>Nombre</label>
          <input
            className='form__div__input'
            id='first-name'
            name='first-name'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData['first-name']}
          />
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='last-name'>Apellido</label>
          <input
            className='form__div__input'
            id='last-name'
            name='last-name'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData['last-name']}
          />
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='nationality'>Nacionalidad</label>
          <input
            className='form__div__input'
            id='nationality'
            name='nationality'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData.nationality}
          />
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='address'>Direccion</label>
          <input
            className='form__div__input'
            id='address'
            name='address'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData.address}
          />
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='phone-number'>Numero telefonico</label>
          <input
            className='form__div__input'
            type='number'
            id='phone-number'
            name='phone-number'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData['phone-number']}
          />
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='email'>Correo electronico</label>
          <input
            className='form__div__input'
            id='email'
            name='email'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData.email}
          />
        </div>

        <div className='form__div'>
          <label className='form__div__label' htmlFor='birthdate'>Fecha de nacimiento</label>
          <input
            className='form__div__input'
            type='date'
            id='birthdate'
            name='birthdate'
            required
            onChange={(e) => setAttributes(e, setData, formData)}
            value={formData.birthdate}
          />
        </div>
        <button type='submit' className='form__button'>Agregar usuario</button>
      </form>
    </section>
  );
};

export default AddUser;
