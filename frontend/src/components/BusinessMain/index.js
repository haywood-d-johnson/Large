import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllBusinesses } from "../../store/business";
import BusinessContainer from "../BusinessContainer";

const BusinessMain = () => {
    const dispatch = useDispatch();
    const business = useSelector(state => state.business.list);

    const [bus, setBus] = useState(business);

    const sortedBusiness = business.sort((a, b) => (a.id < b.id ? -1 : 1));

    useEffect(() => {
        dispatch(getAllBusinesses());
    }, [bus, dispatch]);

    return (
        <>
            {business &&
                sortedBusiness.map(b => {
                    return (
                        <>
                            <BusinessContainer key={b?.title} business={b} />
                        </>
                    );
                })}
        </>
    );
};

export default BusinessMain;
