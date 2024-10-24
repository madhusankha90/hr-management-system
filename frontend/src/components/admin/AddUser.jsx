import React from 'react';

const AddUser = () => {
  return (
    <div className='border border-black'> 
      <div className="pb-5">
      <div className="container mx-auto flex justify-center items-center">
        <div className="hidden md:flex space-x-6 font-primary text-third-size cursor-pointer">
          <span className="hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" onClick={()=>navigate('/dashboard')} >Add User</span>
          <span className=" hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" >Contact Details</span>
          <span className=" hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" >Emergency Contacts</span>
          <span className=" hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" >Job</span>
          <span className=" hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" >Salary</span>
          <span className=" hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" >Qualifications</span>
          <span className=" hover:text-white hover:bg-yellow-500 bg-gray-200 p-5 rounded-xl shadow-md" >Report to</span>
          
        </div>
      </div>
      </div>

    <div className="container mx-auto font-primary overflow-auto shadow-md">
      {/* Search Section */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-base font-semibold mb-4">System Users</h2>

        <div className='flex flex-col'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:!border-yellow-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              placeholder="Employee Id"
              className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Role</label>
            <select className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500">
              <option value="">-- Select --</option>
              <option value="Admin">Admin</option>
              <option value="ESS">ESS</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500">
              <option value="">-- Select --</option>
              <option value="Enabled">Enabled</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>
        </div>
        
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="text"
              placeholder="Password"
              className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow"
            />
          </div>
          </div>

          </div>

        {/* Buttons */}
        <div className="text-sm mt-4 flex space-x-5">
          <button className="bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600">
            Search
          </button>
          <button className="bg-white border border-green-500 px-3 py-2 rounded-full hover:bg-yellow-500 hover:text-white hover:border-yellow-500">
            Reset
          </button>
        </div>
      </div>

     

      <div className="bg-white mt-5 p-4 rounded-xl">

      <div className="mt-4 text-sm">
        <button className="bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600">
          + Add
        </button>
      </div>

        <h2 className="text-base font-semibold mb-4 mt-4">(4) Records Found</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border text-sm">Username</th>
              <th className="px-4 py-2 border text-sm">Employee ID</th>
              <th className="px-4 py-2 border text-sm">User Role</th>
              <th className="px-4 py-2 border text-sm">Status</th>
              <th className="px-4 py-2 border text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Admin</td>
              <td className="border px-4 py-2">Admin</td>
              <td className="border px-4 py-2">Andre Tenorio</td>
              <td className="border px-4 py-2">Enabled</td>
              <td className="border px-4 py-2 flex space-x-2">
                <button className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            {/* Add additional rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AddUser;
