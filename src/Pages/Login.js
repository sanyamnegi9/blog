import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";

const Login = () => {
  const {setUser} = useContext(UserStatusContext);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };
  return (
    <section className="h-[87.5vh] flex items-center justify-center">
      <form className="bg-slate-300 px-16 py-8" onSubmit={handleSubmit}>
        <h5 className="text-center mb-4 text-2xl capitalize">login</h5>
        <div className="flex flex-col">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" mb-4"
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className=" bg-slate-800 text-slate-50 mt-6 py-1"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
