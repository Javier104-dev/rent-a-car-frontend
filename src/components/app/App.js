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


const App = () => {
  return (
    <Router>
      <Header/>
      <NavMenu/>
        <Routes>
          <Route exact path='/' element={<Reservation buttons={false}/>}/>
          <Route exact path='/reservation/add' element={<AddReservation/>}/>
          <Route exact path='/reservation/manage' element={<Reservation buttons={true}/>}/>
          <Route exact path='/reservation/:id/view' element={<ViewReservation/>}/>
          <Route exact path='/reservation/:id/edit' element={<EditReservation/>}/>
          
          <Route exact path='/user/manage' element={<User/>}/>
          <Route exact path='/car/manage' element={<Car/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
