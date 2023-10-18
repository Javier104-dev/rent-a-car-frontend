import { Routes, Route } from 'react-router-dom';
import ManageReservation from '../reservation/ManageReservation';
import AddReservation from '../reservation/AddReservation';
import ViewReservation from '../reservation/ViewReservation';
import EditReservation from '../reservation/EditReservation';
import ManageUser from '../user/ManageUser';
import AddUser from '../user/AddUser';
import ViewUser from '../user/ViewUser';
import EditUser from '../user/EditUser';
import ManageCar from '../car/ManageCar';
import AddCar from '../car/AddCar';
import ViewCar from '../car/ViewCar';
import EditCar from '../car/EditCar';

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path='/' element={<ManageReservation buttons={false}/>}/>

      <Route exact path='/reservation/manage' element={<ManageReservation buttons={true}/>}/>
      <Route exact path='/reservation/add' element={<AddReservation/>}/>
      <Route exact path='/reservation/:id/view' element={<ViewReservation/>}/>
      <Route exact path='/reservation/:id/edit' element={<EditReservation/>}/>

      <Route exact path='/user/manage' element={<ManageUser/>}/>
      <Route exact path='/user/add' element={<AddUser/>}/>
      <Route exact path='/user/:id/view' element={<ViewUser/>}/>
      <Route exact path='/user/:id/edit' element={<EditUser/>}/>

      <Route exact path='/car/manage' element={<ManageCar/>}/>
      <Route exact path='/car/add' element={<AddCar/>}/>
      <Route exact path='/car/:id/view' element={<ViewCar/>}/>
      <Route exact path='/car/:id/edit' element={<EditCar/>}/>

      <Route exact path='*' element={<div>Pagina inexistente</div>}/>
      {/* probar ruta total para quen o aparezca el footer y header */}
  </Routes>
  );
};

export default RoutesApp;
