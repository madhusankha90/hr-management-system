import React from 'react';

const AddUser = () => {
  return (
    <div className="container mx-auto border border-black font-primary overflow-auto shadow-md">
      {/* Search Section */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">System Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Username Input */}
          <div>
            <label className="block text-base font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:border-yellow-500
              focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* User Role Dropdown */}
          <div>
            <label className="block text-base font-medium text-gray-700">User Role</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-xl">
              <option value="">-- Select --</option>
              <option value="Admin">Admin</option>
              <option value="ESS">ESS</option>
            </select>
          </div>

          {/* Employee Name Input */}
          <div>
            <label className="block text-base font-medium text-gray-700">Employee Name</label>
            <input
              type="text"
              placeholder="Type for hints..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-base font-medium text-gray-700">Status</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-xl">
              <option value="">-- Select --</option>
              <option value="Enabled">Enabled</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex space-x-5">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Search
          </button>
          <button className="bg-white border border-green-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white hover:border-yellow-500">
            Reset
          </button>
        </div>
      </div>

      {/* Add Button */}
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          + Add
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white mt-4 p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">(4) Records Found</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Username</th>
              <th className="px-4 py-2 border">User Role</th>
              <th className="px-4 py-2 border">Employee Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
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
  );
};

export default AddUser;
