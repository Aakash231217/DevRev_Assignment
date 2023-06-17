import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import About from './pages/about/About';
import Authors from './pages/authors/Authors';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/authors" element={<Authors/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/book/:id" element={<Contact/>}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
