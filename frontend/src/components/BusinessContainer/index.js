import "./BusinessContainer.css";

const BusinessContainer = ({ business }) => {
    return (
        <div className="business_container">
            <h3 className="business_name">
                {business.id}. {business.title}
            </h3>
            <div className="business_address">{business.address}</div>
            <div className="business_location">
                {business.city}, {business.state}, {business.zip}
            </div>
            <div className="business_description">{business.description}</div>
            <button className="business_button">View this Business</button>
        </div>
    );
};

export default BusinessContainer;
