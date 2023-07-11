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
  const [updateData, setUpdateData] = useState<{ [email: string]: { f_name: string; l_name: string } }>({});

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

  const handleUpdateUser = async (email: string) => {
    setIsLoading(true);
    try {
      const { f_name, l_name } = updateData[email];
      const response = await fetch('/api/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, f_name, l_name }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        // Update the user in the local state
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user.email === email) {
              return { ...user, f_name, l_name };
            }
            return user;
          })
        );
      } else {
        console.log('Error updating user');
        window.alert('Error updating user');
      }
    } catch (error) {
      console.error('An error occurred while updating user', error);
    }
    setIsLoading(false);
  };

  const handleDeleteUser = async (email: string) => {
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

  const handleInputChange = (email: string, field: string, value: string) => {
    setUpdateData((prevData) => ({
      ...prevData,
      [email]: {
        ...prevData[email],
        [field]: value,
      },
    }));
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.f_name}</td>
                <td>{user.l_name}</td>
                <td>{user.email}</td>
                <td>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={updateData[user.email]?.f_name || ''}
                    onChange={(e) => handleInputChange(user.email, 'f_name', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={updateData[user.email]?.l_name || ''}
                    onChange={(e) => handleInputChange(user.email, 'l_name', e.target.value)}
                  />
                  <button onClick={() => handleUpdateUser(user.email)} disabled={isLoading}>
                    Update
                  </button>
                </td>
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
