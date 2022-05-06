import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllBusinesses } from "../../store/business";
import BusinessContainer from "../BusinessContainer";

const BusinessMain = () => {
    const dispatch = useDispatch();
    const business = useSelector(state => state.business.list);

    const [bus, setBus] = useState(business);

    useEffect(() => {
        dispatch(getAllBusinesses());
    }, [bus, dispatch]);

    return (
        <>
            {business &&
                business.map(b => {
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
