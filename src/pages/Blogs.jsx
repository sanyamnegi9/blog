import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <h2>Blog</h2>
      <Link to="/article" className="h-10 w-20 bg-slate-500">
        article
      </Link>
    </>
  );
};

export default Blogs;
