import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ServicePage from './Pages/Service';
import DashBoard from './Component/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RecruimentPage from './Pages/Recruiment';
import NewsPage from './Pages/News';
import ContactPage from './Pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route exact path='/about-us' element={<HomePage />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/register' element={<Register />}/>
      <Route exact path='/service' element={<ServicePage />}/>
      <Route exact path='/recruitment' element={<RecruimentPage />}/>
      <Route exact path='/news' element={<NewsPage />}/>
      <Route exact path='/contact' element={<ContactPage />}/>
      <Route exact path='/dashboard' element={<DashBoard />}/>
    </Routes>
  )
}

