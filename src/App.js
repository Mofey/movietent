import './App.css';
import ReactApp from './ReactApp';
import Movietent from './Movietent';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactApp />} />
        <Route path="movietent" element={<Movietent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
