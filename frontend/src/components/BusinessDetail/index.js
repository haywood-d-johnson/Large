import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

import { getOneBusiness } from "../../store/business";

import EditBusinessForm from "../EditBusinessForm";

import "./BusinessDetail.css";

const BusinessDetail = () => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const { businessId } = useParams();

    const business = useSelector(state => {
        return state.business.list;
    });

    const [showEditMenu, setShowEditMenu] = useState(false);
    const [showDeleteMenu, setShowDeleteMenu] = useState(false);

    // did multiple. Not clean, but separation of concerns
    //editMenu
    const openEditMenu = () => {
        if (showEditMenu) return;
        setShowEditMenu(true);
    };
    useEffect(() => {
        if (!showEditMenu) return;
        const closeMenu = () => {
            setShowEditMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showEditMenu]);

    const openDeleteMenu = () => {
        if (showDeleteMenu) return;
        setShowDeleteMenu(true);
    };
    useEffect(() => {
        if (!showDeleteMenu) return;
        const closeMenu = () => {
            setShowEditMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showDeleteMenu]);

    useEffect(() => {
        dispatch(getOneBusiness(businessId));
    }, [businessId, dispatch]);

    const { id, title, description, address, city, state, zip } =
        business[businessId - 1];

    return (
        <div className="business-detail_container">
            <div className="business-detail_title">{title}</div>
            <div className="business-detail_description">{description}</div>
            <div className="business-detail_location">
                <div className="business-detail_address">{address}</div>
                <div className="">
                    {city}, {state}, {zip}
                </div>
            </div>
            <NavLink to={"#"}>
                <button className="business-detail_review-button">
                    Add a review
                </button>
            </NavLink>
            {user.id !== undefined && business[id].userId === user.id && (
                <div className="business-detail_option_buttons">
                    <button
                        className="business-detail_edit-button"
                        onClick={openEditMenu}
                    >
                        Edit this business
                    </button>
                    <button
                        className="business-detail_delete-button"
                        onClick={openDeleteMenu}
                    >
                        Delete This Business
                    </button>
                </div>
            )}
            {showEditMenu && (
                <EditBusinessForm business={business} businessId={businessId} />
            )}
        </div>
    );
};

export default BusinessDetail;
