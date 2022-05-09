import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { getOneBusiness } from "../../store/business";

import { editBusiness } from "../../store/business";

const EditBusinessForm = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const business = useSelector(state => state.business[businessId]);
    const history = useHistory();
    // const [businessInfo, setBusinessInfo] = useState({
    //     title: "",
    //     description: "",
    //     address: "",
    //     city: "",
    //     state: "",
    //     zip: "",
    // });

    const [title, setTitle] = useState(business?.title);
    const [description, setDescription] = useState(business?.description);
    const [address, setAddress] = useState(business?.address);
    const [city, setCity] = useState(business?.city);
    const [state, setState] = useState(business?.state);
    const [zip, setZip] = useState(business?.zip);
    // // form has valid information
    const [ok, setOk] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getOneBusiness(businessId));
        console.log("ran");
    }, [businessId, dispatch, errors, ok]);

    const handleSubmit = async e => {
        e.preventDefault();

        dispatch(
            editBusiness({
                id: business.id,
                title,
                description,
                address,
                city,
                state,
                zip,
            })
        )
            .then(() => {
                setOk(true);
                if (errors.length === 0 && ok) return <Redirect to="/" />;
            })
            .catch(async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
                setOk(false);
            });

        // if (!res) {
        //     setErrors(["There was a problem. Please try again."]);
        //     setOk(false);
        // } else {
        //     setOk(true);
        //     reset();
        //     history.push("/");
        // }
    };

    return (
        <form className="business-new_form-container" onSubmit={handleSubmit}>
            <ul>
                {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                ))}
            </ul>
            <>
                <label className="business-new_form-title">
                    Title:
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </label>
            </>

            <div className="business-new_form-description">Description:</div>
            <textarea
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <label className="business-new_form-address">
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
            </label>
            <label className="business-new_form-city">
                City:
                <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                />
            </label>
            <label className="business-new_form-state">
                State:
                <input
                    type="text"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required
                />
            </label>
            <label className="business-new_form-zip">
                Zip:
                <input
                    type="text"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    required
                />
            </label>

            <button className="edit-form_submit-button" type="submit">
                Update this business
            </button>

            <NavLink to={"/"}>
                <button className="edit-form_cancel-button">Cancel</button>
            </NavLink>
        </form>
    );
};

export default EditBusinessForm;
