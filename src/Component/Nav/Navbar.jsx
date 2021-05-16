// import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import { useCart } from "../../Context/cartContext";

export default function Navbar() {
 
//   const {wishlist,cart } = useCart();
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h3>FinoTube</h3>
      </NavLink>

      <div style={{ display: "flex", padding: "1rem" }}>
        <div className="cart-bg">
          <NavLink to="/wishlist">
            <i class="fas fa-thumbs-up"></i>
          </NavLink>
          <span className="alert">0</span>
        </div>
        <div className="cart-bg">
          <NavLink to="/cart">
           <i class="far fa-play-circle"></i>
          </NavLink>
          <span className="alert">0</span>
        </div>
      </div>
    </nav>
  );
}
