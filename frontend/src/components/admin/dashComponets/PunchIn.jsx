import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../../imges/background.png'
import axios from 'axios';

const PunchInCard = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/create-punch',{
        date,
        time,
        note
      });
      if (response.status === 201) {
        alert('punch out successfull')
        navigate('/admin-dashboard')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const handlePunchOutCancel = () => {
    alert('Punched out cancelled');
    navigate('/admin-dashboard')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h3 className="text-xl font-semibold text-center mb-4">Punch Out</h3>

        <div className="text-center mb-4">
          <p className="text-sm text-gray-700">Punched in time</p>
          <p className="text-lg font-semibold text-black">
            2024-08-10 - 02:17 PM (GMT +02:00)
          </p>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* Time Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* Note Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            rows="3"
            placeholder="Add a note (optional)"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            type='submit'
          >
            Punch Out
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={handlePunchOutCancel}
          >
            Cancel
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default PunchInCard;
