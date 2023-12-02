import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, content } = blog;
  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-slate-500" key={id}>
      <h2 className="text-3xl mb-3 text-slate-950 font-medium">{title}</h2>
      <p className=" max-w-3xl text-center mb-4 text-xl">{content}</p>
      <Link
        to={`/blogs/${title}`} // or [`/blogs/${id}`]
        className="mt-6 border-2 rounded-3xl py-3 max-w-fit mx-auto font-bold px-5 capitalize text-slate-950 border-slate-950"
      >
        Rad more
      </Link>
    </div>
  );
};

export default BlogCard;
