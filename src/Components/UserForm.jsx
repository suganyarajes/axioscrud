import React, { useState, useEffect } from "react";

const UserForm = ({ onSave, userToEdit }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    } else {
      setUser({ name: "", email: "" });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {userToEdit ? "Update" : "Add"} User
      </button>
    </form>
  );
};

export default UserForm;
