import React, { useState } from 'react';
import styles from '../styles/register.module.css';
import { useRouter } from 'next/router';

const RegistrationForm = () => {
  const [f_name, setFirstName] = useState('');
  const [l_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [error, SetError] = useState('');
    const router = useRouter();


  const handleRegistration = async(e:any) => {
    e.preventDefault(); 
// prevents the refresh

//is important | validation 
    if (!f_name || !l_name || !email || !password) {
        window.alert('All fields are required')
        console.error('All fields are required');
        return;
      }
    try {
        const response = await fetch('/api/userController', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {f_name, l_name, email, password}),
        });
  
        if (response.ok) {
           console.log('Registered Successfully');
        //    SetError('');
         } else {
           console.log('User Exists, please login');
        //    SetError('Already Registered, login');
         }
      } catch (error) {
        console.error('error occurred while registering', error);
        // SetError('error occurred while registering');
       }
   
  };

  return (
    <form onSubmit={handleRegistration} className={styles.formContainer}>
      <div>
        <label htmlFor="f_name">First Name:</label>
        <input
          type="text"
          id="f_name"
          value={f_name}
          onChange={(e) => setFirstName(e.target.value)}
        //   autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="l_name">Last Name:</label>
        <input
          type="text"
          id="l_name"
          value={l_name}
          onChange={(e) => setLastName(e.target.value)
        }
        // autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        //   autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        //   autoComplete="off"
        />
      </div>
      
      <button type="submit" className={styles.button}>Register</button>

      <button type="button" className={styles.button} onClick={() => router.push('/login')}>
          Go to Login
        </button>
    </form>
  );
};

export default RegistrationForm;