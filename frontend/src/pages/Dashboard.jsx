import React, {useState, useEffect} from 'react'
import {jwtDecode} from 'jwt-decode';
const Dashboard = ({setIsLoggedIn}) => {
    const [role, setRole] = useState('');

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwtToken');
        setIsLoggedIn(false);  // Set isLoggedIn to false when user logs out
    }

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decoded = jwtDecode(token);
      console.log({decoded})
      setRole(decoded.role);  // Set role based on decoded token
    }
  }, []);


  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='absolute top-10 bg-black p-2 text-white' onClick={handleLogout}>Logout</button>
      {role && <h1 className='text-2xl'>Hello, {role.charAt(0).toUpperCase() + role.slice(1)}</h1>}
    </div>
  )
}

export default Dashboard
