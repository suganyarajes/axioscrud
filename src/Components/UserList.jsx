import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">User List</h2>
      <div className="row row-cols-12 row-cols-sm-12 row-cols-md-12 row-cols-lg-12 row-cols-xl-12 row-cols-xxl-12 g-4">
        {users.map((user) => (
          <div key={user.id} className="col-12">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-warning btn-sm" onClick={() => onEdit(user)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
