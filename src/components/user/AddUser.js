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
    <section>
      <form onSubmit={onSubmit}>
        <label>Nombre</label>
        <input
          name='first-name'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData['first-name']}
        />

        <label>Apellido</label>
        <input
          name='last-name'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData['last-name']}
        />

        <label>Nacionalidad</label>
        <input
          name='nationality'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData.nationality}
        />

        <label>Direccion</label>
        <input
          name='address'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData.address}
        />

        <label>Numero telefonico</label>
        <input 
          type='number'
          name='phone-number'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData['phone-number']}
        />

        <label>Correo electronico</label>
        <input
          name='email'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData.email}
        />

        <label>Fecha de nacimiento</label>
        <input 
          name='birthdate'
          type='date'
          onChange={(e) => setAttributes(e, setData, formData)}
          value={formData.birthdate}
        />

        <div>
          <button type='submit'>Agregar usuario</button>
        </div>
      </form>
    </section>
  );
};

export default AddUser;
