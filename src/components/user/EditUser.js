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
    <section>
      {loading && <div>Cargando</div>}
      {data && (
        <>
          <div>
            <h1>{`Editar usuario ${data.firstName} ${data.lastName}`}</h1>
          </div>
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
              value={formatDatetimeToInput(formData.birthdate, false)}
            />

            <div>
              <button type='submit'>Editar usuario</button>
            </div>
        </form>
      </>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default EditUser;
