import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {isAuth === true ? (
                        <Fragment>
                            {' '}
                            <li className="nav-item">
                                <Link to='/create'>Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/logout'>Logout</Link>
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            {' '}
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Signup</Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;