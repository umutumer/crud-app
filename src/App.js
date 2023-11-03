import './App.css';
import Create from './Components/Create';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
