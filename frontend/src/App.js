import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path='/login' element={< Login/>} />
        <Route path='/register' element={< Register/>} />
        <PrivateRoute path='/' element={<Dashboard />} />
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
