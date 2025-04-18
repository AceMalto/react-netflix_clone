import { useState } from 'react';
import { loginWithTempAccount } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  const handleTempLogin = () => {
    const loggedInUser = loginWithTempAccount();
    setUser(loggedInUser);
    navigate('/home')
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Login Page</h1>

      <button
        onClick={handleTempLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login with Temporary Account
      </button>

      {user && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <p>Welcome, <strong>{user.username}</strong>!</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
