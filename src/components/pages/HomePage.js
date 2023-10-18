import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import './home-page.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default HomePage;