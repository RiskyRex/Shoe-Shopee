
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar({ cartCount }) {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>

    <div className="navbar">
     
      <div className="navbar-logo">
       <img src="/shoes.png" alt="" className="logo-image"/>
      <h1 className="logo-text">Shoes Shopee</h1>
      </div>

      <div className="navbar-services">
      <Link to="/">Home </Link>
      
      <Link to="/cart">Cart ({cartCount})</Link>
        
         <div>
        <Link to="/login">
          <button className="login-button">
            Login
          </button>
        </Link>
      </div>
        </div>
 
      </div>

    </nav>
  );
}
