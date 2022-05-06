import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

import { getOneBusiness } from "../../store/business";

import "./BusinessDetail.css";

const BusinessDetail = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    console.log(businessId);
    const business = useSelector(state => {
        return state.business.list;
    });

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
            <div className="business-detail_option_buttons">
                <NavLink to="/business/edit">
                    <button className="business-detail_edit-button">
                        Edit this business
                    </button>
                </NavLink>
                <NavLink to={"#"}>
                    <button className="business-detail_review-button">
                        Add a review
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default BusinessDetail;
