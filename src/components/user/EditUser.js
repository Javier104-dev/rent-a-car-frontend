import { useNavigate, useParams } from 'react-router-dom';
import { addUser, getUser } from '../../api/user/userApi';
import useFetchReducer from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { addRecord, formatDatetimeToInput, setAttributes } from '../../utilities/utilities';

const EditUser = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchReducer(getUser, id);
  const [formData, setData] = useState({
    id: '',
    'first-name': '',
    'last-name': '',
    nationality: '',
    address: '',
    'phone-number': '',
    email: '',
    birthdate: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data) setData({
      id: data.id,
      'first-name': data.firstName,
      'last-name': data.lastName,
      nationality: data.nationality,
      address: data.address,
      'phone-number': data.phoneNumber,
      email: data.email,
      birthdate: data.birthdate
    });
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    addRecord(
      addUser,
      formData,
      'Usuario editado con exito',
      navigate,
      `/user/${formData.id}/view`
    );
  };

  return (
    <section className='section-add'>
      {loading && <div>Cargando</div>}
      {data && (
        <form onSubmit={onSubmit} className='form'>
          <div className='form__title'>
            <h1 className='form__title__text'>{`Editar usuario ${data.firstName} ${data.lastName}`}</h1>
          </div>

          <div className='form__div'>
            <label className='form__div__label' htmlFor='first-name'>Nombre</label>
            <input
              className='form__div__input'
              id='first-name'
              name='first-name'
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
              onChange={(e) => setAttributes(e, setData, formData)}
              value={formatDatetimeToInput(formData.birthdate, false)}
            />
          </div>
          <button type='submit' className='form__button'>Editar usuario</button>
      </form>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default EditUser;
