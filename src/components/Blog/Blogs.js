import React from "react";
import BlogCard from "./BlogCard";
import { blogsData } from "../../data";

const Blogs = () => {
  return (
    <div className="p-4 bg-slate-900 text-gray-50">
      <h2 className="text-center text-4xl mb-8 font-semibold">Blogs</h2>
      <div className="flex flex-col gap-4">
        {blogsData.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
