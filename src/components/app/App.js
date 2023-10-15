import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import NavMenu from '../navMenu/NavMenu';
import Reservation from '../reservation/Reservation';
import User from '../user/User';
import Car from '../car/Car';
import AddReservation from '../reservation/AddReservation';
import ViewReservation from '../reservation/ViewReservation';
import EditReservation from '../reservation/EditReservation';
import ViewUser from '../user/ViewUser';
import AddUser from '../user/AddUser';
import EditUser from '../user/EditUser';
import AddCar from '../car/AddCar';
import ViewCar from '../car/ViewCar';
import EditCar from '../car/EditCar';


const App = () => {
  return (
    <Router>
      <Header/>
      <NavMenu/>
        <Routes>
          <Route exact path='/' element={<Reservation buttons={false}/>}/>

          <Route exact path='/reservation/manage' element={<Reservation buttons={true}/>}/>
          <Route exact path='/reservation/add' element={<AddReservation/>}/>
          <Route exact path='/reservation/:id/view' element={<ViewReservation/>}/>
          <Route exact path='/reservation/:id/edit' element={<EditReservation/>}/>

          <Route exact path='/user/manage' element={<User/>}/>
          <Route exact path='/user/add' element={<AddUser/>}/>
          <Route exact path='/user/:id/view' element={<ViewUser/>}/>
          <Route exact path='/user/:id/edit' element={<EditUser/>}/>

          <Route exact path='/car/manage' element={<Car/>}/>
          <Route exact path='/car/add' element={<AddCar/>}/>
          <Route exact path='/car/:id/view' element={<ViewCar/>}/>
          <Route exact path='/car/:id/edit' element={<EditCar/>}/>

          <Route exact path='*' element={<div>Pagina inexistente</div>}/>
          {/* probar ruta total para quen o aparezca el footer y header */}
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
