import React from 'react';

const Login = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-green-700">
        {/* Large Ellipse */}
        <div className="absolute w-[724px] h-[724px] left-[-362px] top-[358px] bg-[rgba(48,174,72,0.76)] rounded-full"></div>
        {/* Medium Ellipse */}
        <div className="absolute w-[572px] h-[572px] left-[-286px] top-[434px] bg-yellow-500 rounded-full"></div>
        {/* Small Ellipse */}
        <div className="absolute w-[438px] h-[438px] left-[-219px] top-[501px] bg-green-700 rounded-full"></div>
        {/* Vector */}
        <div className="absolute w-[864px] h-[835px] left-[416px] top-0 bg-[rgba(48,174,72,0.76)]"></div>
      </div>

      {/* Form */}
      <div className="absolute w-[357px] h-[605px] left-[462px] top-[89px]">
        {/* Welcome Back */}
        <h1 className="absolute text-white text-2xl font-bold left-[89px] top-[0] uppercase">
          Welcome Back
        </h1>

        {/* Username Field */}
        <div className="absolute w-full h-[45px] top-[356px]">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-full px-4 py-2 text-white bg-transparent border border-white rounded-md placeholder-white uppercase"
          />
        </div>

        {/* Password Field */}
        <div className="absolute w-full h-[45px] top-[421px]">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-full px-4 py-2 text-white bg-transparent border border-white rounded-md placeholder-white uppercase"
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="absolute flex justify-between w-full top-[480px]">
          <label className="text-white text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-white text-sm underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <div className="absolute w-full h-[45px] top-[520px]">
          <button className="w-full h-full bg-white text-green-700 font-semibold uppercase rounded-md shadow-md">
            Login
          </button>
        </div>

        {/* Sign Up */}
        <p className="absolute w-full text-center text-white opacity-70 top-[580px]">
          Don’t have an account? <a href="/signup" className="underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
