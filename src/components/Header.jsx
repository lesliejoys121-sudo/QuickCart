import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/global.css';

const Header = () => {
    const { cartCount } = useCart();

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                    QuickCart <span className="logo-dot">.</span>
                </Link>
                <nav className="main-nav">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end>
                        Home
                    </NavLink>
                    <NavLink to="/category/electronics" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Electronics
                    </NavLink>
                    <NavLink to="/category/wearables" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Wearables
                    </NavLink>
                    <Link to="/cart" className="nav-link cart-icon">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
