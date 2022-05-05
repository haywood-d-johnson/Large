import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Navigation.css";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="navbar-user_dropdown">
            <button onClick={openMenu} className="navbar-menu_button">
                <FontAwesomeIcon icon={faChessKing} shake />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                    <li>
                        <div className="navbar_links">
                            <div className="navbar_site">
                                <NavLink
                                    to={{
                                        pathname:
                                            "https://hdjohnson-dev.online/",
                                    }}
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faChessKing} shake />
                                    <div className="navbar_site_tip">
                                        View My Site
                                    </div>
                                </NavLink>
                            </div>
                            <div className="navbar_github">
                                <NavLink
                                    to={{
                                        pathname:
                                            "https://github.com/haywood-d-johnson",
                                    }}
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faGithub} shake />
                                    <div className="navbar_site_tip">
                                        View My Github
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;
