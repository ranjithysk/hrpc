import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddHr from './components/AddHr';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/add_hr' element={<AddHr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
