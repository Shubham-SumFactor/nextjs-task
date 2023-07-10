import React, { useState, useEffect } from 'react';


interface User {
  f_name: string;
  l_name: string;
  email: string;
  
}
const UserAll = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/getAllUsers', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data.message);
        console.log(data.message); 
      } else {
        console.log('Error retrieving users');
        window.alert('Error retrieving users');
      }
    } catch (error) {
      console.error('An error occurred while retrieving users', error);
    }
    setIsLoading(false);
  };


  return (
    <div>
      <h1>All Users</h1>
      <button onClick={handleGetAllUsers} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get All Users'}
      </button>
      {users && users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>F_Name</th>
              <th>L_Name</th>
              <th>Email</th>
              {/* Add more table headers if necessary */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.f_name}</td>
                <td>{user.l_name}</td>
                <td>{user.email}</td>
                {/* Add more table cells based on user properties */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserAll;
