import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [donatedCount, setDonatedCount] = useState(0);
  const [requestedCount, setRequestedCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProfileStats();
  }, []);

  const fetchProfileStats = async () => {
    try {
      setLoading(true);
      // Get user email from localStorage (assuming userInfo is stored after login)
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const email = userInfo?.email;
      if (!email) {
        setError('User not logged in');
        setLoading(false);
        return;
      }
      // Fetch donations made by user
      const donateRes = await axios.get(`http://localhost:5000/api/donate?email=${email}`);
      setDonatedCount(donateRes.data.length);
      // Fetch requests made by user (assuming a request model/endpoint exists)
      // If not, set requestedCount to 0 or implement accordingly
      // const requestRes = await axios.get(`http://localhost:5000/api/request?email=${email}`);
      // setRequestedCount(requestRes.data.length);
      setRequestedCount(0); // Placeholder if no request endpoint
      setLoading(false);
    } catch (err) {
      setError('Failed to load profile stats');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && !error && (
        <>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-lg">
              Orders Donated: {donatedCount}
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-lg">
              Orders Requested: {requestedCount}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
