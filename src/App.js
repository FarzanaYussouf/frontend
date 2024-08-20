import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SellerRegister from './seller/pages/SellerRegister';
import SellerLogin from './seller/pages/SellerLogin';
import SellerDashboard from './seller/pages/SellerDashboard';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/login" element = {<Login/>}/>

          <Route path = "/seller-dashboard" element = {<SellerDashboard/>}/>
          <Route path = "/seller-register" element = {<SellerRegister/>}/>
          <Route path = "/seller-login" element = {<SellerLogin/>}/>

      </Routes>
    </>
  );
}

export default App;
