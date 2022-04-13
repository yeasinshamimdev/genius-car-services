import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service/:serviceId' element={<ServiceDetails />}></Route>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;