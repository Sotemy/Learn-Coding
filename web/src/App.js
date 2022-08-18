import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Lesson } from './pages/Lesson';
import { Admin } from './pages/Admin';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:title/:lesson" element={<Lesson />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
