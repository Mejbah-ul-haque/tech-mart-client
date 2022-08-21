
import './App.css';
import Footer from './Pages/Shered/Footer';
import Navbar from './Pages/Shered/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Business from './Pages/Business/Business';
import Design from './Pages/Design/Design';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <RequireAuth><Home /></RequireAuth>
        } />
        <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
        <Route path="business" element={<RequireAuth><Business /></RequireAuth>} />
        <Route path="design" element={<RequireAuth><Design /></RequireAuth>} />
        <Route path="contact" element={<RequireAuth><Contact /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={
          <Register />
        } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
