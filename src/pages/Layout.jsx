
import { Link, Outlet } from "react-router-dom";
import '../App.css'
const Layout = () => {
  return (
    <div>
      <header className="header">
        <Link to="/about">about</Link>
        <Link to="/blog">blog</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="div-footer">
         <h1>2024</h1>   
        </div>
        
        </footer>
    </div>
  );
};

export default Layout;
