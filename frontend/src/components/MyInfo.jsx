import React from 'react';

const MyInfo = () => {
  return (
    <div className="flex min-h-[25rem] bg-gray-100 rounded-lg border border-black overflow-auto">
      {/* <div className="h-[73vh] flex min-h-[25rem] bg-gray-100 rounded-lg border border-black overflow-auto"> */}
  
      <div className="bg-white shadow-lg p-5 w-full font-primary font-semibold text-secondary-size">
        <h2 className="text-lg text-gray-700 mb-2">Pasindu Madushka</h2>
        <p className="text-gray-500 mb-8">Your account is ready, you can now apply for advice.</p>
        
        <div className="flex gap-8">
          {/* Personal Details Section */}
          <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full w-28 h-28 mb-4"
              />
              <h3 className="text-xl font-semibold">CTO</h3>
              <p className="text-gray-700">Pasindu Madushka</p>
              <p className="text-gray-500">0009</p>
              <p className="text-gray-500">20014567993</p>
              <p className="text-gray-500">2001-11-16</p>
              <p className="text-gray-500">Sri Lankan</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-2/3">
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Employee Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>
              <div className="mt-auto">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700">Employee ID</label>
                <input
                  type="text"
                  value="0009"
                  className="w-full border rounded-md p-2 mt-1 bg-gray-100"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700">NIC</label>
                <input
                  type="text"
                  value="20014567993"
                  className="w-full border rounded-md p-2 mt-1 bg-gray-100"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700">Nationality</label>
                <select className="w-full border rounded-md p-2 mt-1">
                  <option>Sri Lankan</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Marital Status</label>
                <select className="w-full border rounded-md p-2 mt-1">
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  value="2001-11-16"
                  className="w-full border rounded-md p-2 mt-1 bg-gray-100"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700">Gender</label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="male" className="form-radio" checked />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input type="radio" name="gender" value="female" className="form-radio" />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
            </form>

            {/* Attachments and Save Buttons */}
            <div className="flex justify-between mt-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
                ADD
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
