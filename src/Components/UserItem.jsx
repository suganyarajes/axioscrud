// src/Components/UserItem.jsx
import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{user.name}</h5>
        <p>{user.email}</p>
      </div>
      <div>
        <button className="btn btn-warning me-2" onClick={() => onEdit(user)}>Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserItem;
