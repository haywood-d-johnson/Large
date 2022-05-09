import { NavLink } from "react-router-dom";

import "./BusinessContainer.css";

const BusinessContainer = ({ business, i }) => {
    return (
        <div className="business_container">
            <h1 className="business_name">{business?.title}</h1>
            <div className="business_address">{business?.address}</div>
            <div className="business_location">
                {business?.city}, {business?.state}, {business?.zip}
            </div>
            <div className="business_description">{business?.description}</div>
            <NavLink key={business?.id} to={`/business/${business?.id}`}>
                <button className="business_button">View this Business</button>
            </NavLink>
        </div>
    );
};

export default BusinessContainer;
