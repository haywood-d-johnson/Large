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
                <NavLink to="/login">Log In</NavLink>
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
                    Home
                </NavLink>
            </div>
            <div className="navbar-right">{isLoaded && sessionLinks}</div>
        </div>
    );
}

export default Navigation;
