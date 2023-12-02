import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import UserStatusProvider from "./contexts/UserStatusContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserStatusProvider>
    <App />
  </UserStatusProvider>
);
