import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <div>Home page</div>
      <Link to="/blogs" className="h-10 w-20 bg-slate-500 mx-4 my-2">
        Blogs
      </Link>
      <Link to="/services" className="h-10 w-20 bg-slate-500 mx-4 my-2">
        services
      </Link>
      <Link to="/contact" className="h-10 w-20 bg-slate-500 mx-4 my-2">
        contact
      </Link>
      <Link to="/about" className="h-10 w-20 bg-slate-500 mx-4 my-2">
        About
      </Link>
    </div>
  );
}

export default Home