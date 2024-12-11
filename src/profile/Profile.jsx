import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    star: true, 
  });

  const handleStar = (event) => {
    event.preventDefault();
    setInfo((prevInfo) => ({
      ...prevInfo,
      star: !prevInfo.star, 
    }));
  };

  const { name, email, phone, star } = info;

  return (
    <form className="profile">
      <img
        alt="profile img"
        src="https://via.placeholder.com/150"
        className="profile-img"
      />
      <button className="star" onClick={handleStar}>
        {star ? "★" : "☆"}
      </button>
      <h3>{name}</h3>
      <div className="phone">{phone}</div>
      <div>{email}</div>
    </form>
  );
};

export default Profile;
