import React from "react";

const AddUser = () => {
  return (
    <div className="container mx-auto font-primary overflow-auto shadow-md">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-base font-semibold mb-4">System Users</h2>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border border-black">
            <div className="border border-black">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500 text-sm"
              />
            </div>

            <div className="border border-black">
              <label className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                placeholder="Employee Id"
                className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500"
              />
            </div>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  User Role
                </label>
                <select className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500">
                  <option value="">-- Select --</option>
                  <option value="Admin">Admin</option>
                  <option value="ESS">ESS</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500">
                  <option value="">-- Select --</option>
                  <option value="Enabled">Enabled</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                className="text-sm mt-1 block w-full p-4 border border-gray-300 rounded-xl focus:border-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
