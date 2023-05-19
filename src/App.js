// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Rose from './components/Rose';
import Said from './components/Said';
import Farangez from './components/Farangez';
import Zahid from './components/Zahid';
import Zahooruddin from './components/Zahooruddin';
import Rajdeep from './components/Rajdeep';
import Asha from './components/Asha';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Rose" element={<Rose/>} />
          <Route path="/Said" element={<Said />} />
          <Route path="/Farangez" element={<Farangez />} />
          <Route path="/Zahid" element={<Zahid />} />
          <Route path="/Zahooruddin" element={<Zahooruddin />} />
          <Route path="/Rajdeep" element={<Rajdeep />} />
          <Route path="/Asha" element={<Asha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
