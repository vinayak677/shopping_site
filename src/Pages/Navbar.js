import React from 'react'
import { LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link to="/" className="navbar-brand fw-bold fs-3">G-Shopping</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/product">Prodcts</Link>
                            </li>
                        </ul>
                        <div className='buttons'>
                          <Link to='#' className='btn btn-outline-dark'>l
                              <LoginOutlined />login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar