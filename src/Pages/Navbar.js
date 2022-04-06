import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold fs-3">G-Shopping</Link>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </div>
                        <div>
                            <Link className="nav-link " aria-current="page" to="/product">Products</Link>
                        </div>
                        <div>
                            <Link className="nav-link " aria-current="page" to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar