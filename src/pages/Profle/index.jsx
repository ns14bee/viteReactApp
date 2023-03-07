import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, removeUser } from "../../setup/redux/userSlice";
import { updateProfile } from "../../setup/redux/apiCalls";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile({ name, email }, dispatch);
  };
  const handleDelete = (e) => {
    console.log("here");
    e.preventDefault();
    dispatch(removeUser());
  };
  return (
    <div className="main-body">
      <form className="form d-flex justify-content-center">
        <div className="card profile">
          <h2>Profile</h2>
          <div className="card-body">
            {profile.error && <p className="text-danger">Some error occured</p>}
            <div>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="name"
                name="name"
                className="form-control"
                placeholder={profile.user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder={profile.user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className={
              profile.pending
                ? "btn btn-light updated-disabled"
                : "btn btn-info"
            }
          >
            Update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
