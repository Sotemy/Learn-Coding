import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Lesson } from './pages/Lesson';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:title" element={<Lesson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
