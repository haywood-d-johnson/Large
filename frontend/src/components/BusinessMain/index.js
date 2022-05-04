import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getAllBusinesses } from "../../store/business";

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
                            <div>{b.title}</div>
                        </>
                    );
                })}
        </>
    );
};

export default BusinessMain;
