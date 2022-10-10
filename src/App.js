import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contacto from './components/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './components/Images';



function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Images/>
      </div>
  </BrowserRouter>
  );
}

export default App;
