import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const addUser = (user) => {
    axios.post("https://jsonplaceholder.typicode.com/users", user)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        console.error("There was an error adding the user!", error);
      });
  };

  const updateUser = (updatedUser) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        setUsers(users.map(user => (user.id === updatedUser.id ? response.data : user)));
        setUserToEdit(null);
      })
      .catch(error => {
        console.error("There was an error updating the user!", error);
      });
  };

  const deleteUser = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error("There was an error deleting the user!", error);
      });
  };

  const handleSave = (user) => {
    if (user.id) {
      updateUser(user);
    } else {
      addUser(user);
    }
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Management Using Axios CRUD</h1>
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <UserForm onSave={handleSave} userToEdit={userToEdit} />
        </div>
        <div className="col-12 col-md-6">
          <UserList users={users} onEdit={handleEdit} onDelete={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
