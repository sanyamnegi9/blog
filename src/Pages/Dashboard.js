import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserStatusContext);


  return (
    <div className="min-h-[87.5vh] flex flex-col items-center">
      <h2 className=" capitalize mx-auto">{`Hello, ${user?.name}`}</h2>
      <Link
        onClick={() => setUser(null)}
        to="/login"
        className="flex mt-auto mb-4 border-2 rounded-3xl py-3 max-w-fit mx-auto font-bold px-5"
      >
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
