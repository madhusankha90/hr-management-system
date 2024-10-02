import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  
  const [employeeName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
      e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/loginuser',{
        employeeName,
        password
      });
      if (response.status === 200){
        navigate('/');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
    }

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-green-700">
        <div className="absolute w-[724px] h-[724px] left-[-362px] top-[358px] bg-[rgba(48,174,72,0.76)] rounded-full"></div>
        <div className="absolute w-[572px] h-[572px] left-[-286px] top-[434px] bg-yellow-500 rounded-full"></div>
        <div className="absolute w-[438px] h-[438px] left-[-219px] top-[501px] bg-green-700 rounded-full"></div>
        <div className="absolute w-[864px] h-[835px] left-[416px] top-0 bg-[rgba(48,174,72,0.76)]"></div>
      </div>

      <div className="absolute w-[90%] max-w-[357px] h-auto left-1/2 transform -translate-x-1/2 top-[10%] sm:top-[20%]">
        <h1 className="text-white text-2xl font-bold text-center uppercase">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="w-full mt-6">
          <input
            type="text"
            placeholder="Username"
            value={employeeName}
            onChange={(e)=>setuserName(e.target.value)}
            className="w-full h-[45px] px-4 py-2 text-white bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:border-green-400"
          />
        </div>

        <div className="w-full mt-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full h-[45px] px-4 py-2 text-white bg-transparent border border-white rounded-md placeholder-white uppercase focus:outline-none focus:border-green-400"
          />
        </div>

        <div className="flex justify-between mt-4">
          <label className="text-white text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-white text-sm underline">
            Forgot password?
          </a>
        </div>
        {error && (
            <div className='text-red-500 text-sm'>{error}</div>
          )}

        <div className="mt-6">
          <button className="w-full h-[45px] bg-white text-green-700 font-semibold uppercase rounded-md shadow-md hover:bg-green-100">
            Login
          </button>
        </div>
        </form>

        <p className="mt-4 text-center text-white opacity-70">
          Don’t have an account? <a href="/signup" className="underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
