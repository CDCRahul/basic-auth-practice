import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

const Homepage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the token exists in localStorage when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        // e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });
      
            const data = await response.json();
      
            if (data.success) {
              // Store token in localStorage
              localStorage.setItem('jwtToken', data.token);
              setIsLoggedIn(true); // Trigger rerender after login
              alert('Login successful!');
            } else {
              alert(data.message);
            }
          } catch (error) {
            console.error('Error logging in:', error);
          }
    }
    
    return (
        isLoggedIn ? (
            <Dashboard setIsLoggedIn={setIsLoggedIn}/>
        ) : (
            <>
                <div className='w-full h-screen flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-semibold'>This is Home Page</h1>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='abc@example.com' 
                        className='p-2 w-1/3 border border-blue-400 my-4'
                    />
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='Your password 🙂'  
                        className='p-2 w-1/3 border border-blue-400 mb-4'
                    />
                    <button className='bg-black text-white py-2 w-1/3' onClick={handleLogin}>
                        Sign In
                    </button>
                </div>
            </>
        )
    );
}

export default Homepage;
