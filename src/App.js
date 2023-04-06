import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Normalnav from './Components/Normalnav';
// import Uppernav from './Components/Uppernav';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Uppernav/> */}
        <Normalnav/>
        <Navbar/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
