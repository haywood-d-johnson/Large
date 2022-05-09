import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

import { getOneBusiness } from "../../store/business";

import "./BusinessDetail.css";

const BusinessDetail = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const user = useSelector(state => state.session.user);
    const business = useSelector(state => state.business[businessId]);

    useEffect(() => {
        dispatch(getOneBusiness(businessId));
    }, [businessId, dispatch]);

    return (
        <div className="business-detail_container">
            <div className="business-detail_title">{business?.title}</div>
            <div className="business-detail_description">
                {business?.description}
            </div>
            <div className="business-detail_location">
                <div className="business-detail_address">
                    {business?.address}
                </div>
                <div className="">
                    {business?.city}, {business?.state}, {business?.zip}
                </div>
            </div>
            <NavLink to={"#"}>
                <button className="business-detail_review-button">
                    Add a review
                </button>
            </NavLink>
            {user.id !== undefined && business?.userId === user.id && (
                <div className="business-detail_option_buttons">
                    <NavLink
                        key={business.id}
                        to={`/business/edit/${business.id}`}
                    >
                        <button className="business-detail_edit-button">
                            Edit this business
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default BusinessDetail;
