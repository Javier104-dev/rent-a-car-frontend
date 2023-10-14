import { useState } from 'react';
import { addRecord } from '../../utilities/utilities';
import { addUser } from '../../api/user/userApi';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [dataForm, setData] = useState({
    'first-name': '',
    'last-name': '',
    nationality: '',
    address: '',
    'phone-number': '',
    email: '',
    birthdate: ''
  });

  const navigate = useNavigate();

  const settAtributes = (e) => {
    const { name, value } = e.target;
    setData({
      ...dataForm,
      [name]: value
    });
  };

  const onSubmit = (e) =>{
    e.preventDefault()
    addRecord(
      addUser,
      dataForm,
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
          onChange={settAtributes}
          value={dataForm['first-name']}
        />

        <label>Apellido</label>
        <input
          name='last-name'
          onChange={settAtributes}
          value={dataForm['last-name']}
        />

        <label>Nacionalidad</label>
        <input
          name='nationality'
          onChange={settAtributes}
          value={dataForm.nationality}
        />

        <label>Direccion</label>
        <input
          name='address'
          onChange={settAtributes}
          value={dataForm.address}
        />

        <label>Numero telefonico</label>
        <input 
          type='number'
          name='phone-number'
          onChange={settAtributes}
          value={dataForm['phone-number']}
        />

        <label>Correo electronico</label>
        <input
          name='email'
          onChange={settAtributes}
          value={dataForm.email}
        />

        <label>Fecha de nacimiento</label>
        <input 
          name='birthdate'
          type='date'
          onChange={settAtributes}
          value={dataForm.birthdate}
        />

        <div>
          <button type='submit'>Agregar usuario</button>
        </div>
      </form>
    </section>
  );
};

export default AddUser;
