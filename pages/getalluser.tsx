import React, { useState, useEffect } from 'react';


interface User {
  id: string;
  f_name: string;
  l_name: string;
  email: string;
  
}
const UserAll = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

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

// ========

const handleDeleteUser = async (email:string) => {
  setIsLoading(true);
  try {
    const response = await fetch(`/api/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      setUsers(users.filter((user) => user.email !== email));
    } else {
      console.log('Error deleting user');
      window.alert('Error deleting user');
    }
  } catch (error) {
    console.error('An error occurred while deleting user', error);
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.f_name}</td>
                <td>{user.l_name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.email)} disabled={isLoading}>
                    Delete
                  </button>
                </td>
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
