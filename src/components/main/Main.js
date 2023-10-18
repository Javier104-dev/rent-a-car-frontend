import NavMenu from '../navMenu/NavMenu';
import RoutesApp from '../routes/Routes';
import './main.css'
import './manage.css'
import './view.css'

const Main = () => {
  return (
    <main className='main'>
      <NavMenu/>
      <RoutesApp/>
    </main>
  );
};

export default Main;
