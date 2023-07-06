import React, { useState } from 'react';
// import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      window.alert('Please enter your email and password');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        window.alert('Login successful');

   
      } else {
        console.log('Incorrect email or password');
        window.alert('Incorrect email or password');

      }
    } catch (error) {
      console.error('An error occurred while logging in', error);
    }
  };

  return (
    <form onSubmit={handleLogin} >
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">
        Login
      </button>
      <button type="button"  onClick={() => router.push('/register')}>
        Go to Registration
      </button>
    </form>
  );
};

export default LoginForm;
