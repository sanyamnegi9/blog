import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" px-4 overflow-x-hidden flex gap-6 flex-col bg-slate-900 text-slate-100 align-bottom justify-center h-[calc(100vh-4.72rem)] w-full  text-center">
      <h2 className="text-9xl">404</h2>
      <h3 className="text-3xl uppercase">Page Not Found</h3>
      <p className="italic text-xl md:text-2xl mx-auto max-w-xl">
        The page you are looking for might have been removed has it change or
        temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 border-2 rounded-3xl py-3 px-12 max-w-fit mx-auto font-bold px-5"
      >
        Back Home
      </Link>
    </div>
  );
};

export default Error;
