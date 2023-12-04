import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";
import icon from "../assets/icon.jpg";

const UserIcon = () => {
  const { user } = useContext(UserStatusContext);

  return (
    <Link to={`${user ? "/dashboard" : "/login"}`} className=" capitalize">
      <Avatar
        alt={user?.name}
        src={user ? icon : ""}
        sx={{ width: 45, height: 45 }}
      />
    </Link>
  );
};

export default UserIcon;
