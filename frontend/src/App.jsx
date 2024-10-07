import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/UserDashboard';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/navbar' element={<NavBar/>} />

          <Route path='/admin-dashboard' element={<PrivateRoute role="admin" component={AdminDashboard}/>}/>

          <Route path='/user-dashboard' element={<PrivateRoute role="user" component={UserDashboard}/>}/>

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
