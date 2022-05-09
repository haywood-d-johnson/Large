import { useState, useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { deleteBusiness } from "../../store/business";

import { getOneBusiness } from "../../store/business";

import "./DeleteBusiness.css";

const DeleteBusiness = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const business = useSelector(state => state.business[businessId]);

    useEffect(() => {
        dispatch(getOneBusiness(businessId));
        console.log("ran");
    }, [businessId, dispatch]);

    const [deleted, setDeleted] = useState(false);

    if (deleted) return <Redirect to="/" />;

    const handleClick = e => {
        e.preventDefault();
        dispatch(deleteBusiness(business)).then(setDeleted(true));
    };

    return (
        <div className="delete-form_container">
            <div className="delete-form_alert">
                Are you sure you want to delete this business?
            </div>
            <div className="delete-form_button-row">
                <button
                    className="delete-form_button-row"
                    onClick={handleClick}
                >
                    Delete this business
                </button>
                <NavLink to={"/"}>
                    <button className="edit-form_cancel-button">Cancel</button>
                </NavLink>
            </div>
        </div>
    );
};

export default DeleteBusiness;
