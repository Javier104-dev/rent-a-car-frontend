import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import NavMenu from '../navMenu/NavMenu';
import Reservation from '../reservation/Reservation';
import User from '../user/User';
import Car from '../car/Car.js';


const App = () => {
  return (
    <Router>
      <Header/>
      <NavMenu/>
        <Routes>
          <Route exact path='/' element={<Reservation/>}/>
          <Route exact path='/reservation/manage' element={<Reservation/>}/>
          <Route exact path='/user/manage' element={<User/>}/>
          <Route exact path='/car/manage' element={<Car/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
