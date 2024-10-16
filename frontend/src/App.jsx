import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/UserDashboard';
import NavBar from './components/NavBar';
import AdminDashboard from './components/AdminDashboard';
import PunchIn from './components/admin/dashComponets/PunchIn';
import UserInfo from './components/userInformation/UserInfo';
import Layout from './AdminLayout';
import Dashboard from './components/Dashboard';
import Time from './components/Time';
import Location from './components/Location';
import Directory from './components/Directory';
import MyInfo from './components/MyInfo';
import AdminLayout from './AdminLayout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          
        <Route path='this' element={<UserInfo/>}/>
          {/* <Route path='/login' element={<Login />} />
          <Route path='/navbar' element={<NavBar/>} /> */}
          
          {/* <Route path='/admin-dashboard/punchin' element={<PunchIn/>}/>

          {/* <Route path='/' element={<Layout/>}/>
          <Route path="userinfo" element={<UserInfo />} /> */}
          <Route path='/' element={<AdminLayout/>}> 
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/time' element={<Time/>} /> 
          <Route path='/location' element={<Location/>} />
          <Route path='/directory' element={<Directory/>} />
          <Route path='/myinfo' element={<UserInfo/>} />
          
          <Route path='/admin-dashboard' element={<PrivateRoute role="admin" component={AdminDashboard}/>}/>
          <Route path='/admin-dashboard/punchin' element={<PrivateRoute role="admin" component={PunchIn}/>}/>

          <Route path='/user-dashboard' element={<PrivateRoute role="user" component={UserDashboard}/>}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
