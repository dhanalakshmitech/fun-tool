import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Expense from './pages/Expense';
import Internet from './pages/Internet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/expense' element={<Expense/>}/>
          <Route path='/speed' element={<Internet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
