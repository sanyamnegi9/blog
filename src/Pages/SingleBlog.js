import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogsData } from "../data";

const SingleBlog = () => {
  const { blogTitle } = useParams(); // or const { blogId } = useParams();

  const blog = blogsData.find((product) => product.title === blogTitle);
  return (
    <div className="min-h-[96.7vh] bg-slate-900 text-gray-50">
      <h2 className="text-center text-3xl py-4 mb-4">{blogTitle}</h2>
      <p className="text-center text-3xl mb-10">{blog.content}</p>
      <Link
        to="/blogs"
        className="border-2 rounded-3xl py-3 w-full mx-auto font-bold px-5 capitalize"
      >
        Go back
      </Link>
    </div>
  );
};

export default SingleBlog;
