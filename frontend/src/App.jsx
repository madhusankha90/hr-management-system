import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/UserDashboard';
import NavBar from './components/NavBar';
import AdminDashboard from './components/AdminDashboard';
import PunchIn from './components/admin/dashComponets/PunchIn';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/navbar' element={<NavBar/>} />
          {/* <Route path='/admin-dashboard/punchin' element={<PunchIn/>}/> */}
          

          <Route path='/admin-dashboard' element={<PrivateRoute role="admin" component={AdminDashboard}/>}/>
          <Route path='/admin-dashboard/punchin' element={<PrivateRoute role="admin" component={PunchIn}/>}/>

          <Route path='/user-dashboard' element={<PrivateRoute role="user" component={UserDashboard}/>}/>

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
