import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";

import "./Navigation.css";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="navbar-login_button">
                    Log In
                </NavLink>
                <NavLink to="/signup" className="navbar-signup_button">
                    Sign Up
                </NavLink>
            </>
        );
    }

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <NavLink exact to="/">
                    What's the 411?
                </NavLink>
            </div>
            <div className="navbar-right">
                <NavLink exact to="/business/new">
                    <button className="navbar-register_button">
                        Register a business
                    </button>
                </NavLink>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
