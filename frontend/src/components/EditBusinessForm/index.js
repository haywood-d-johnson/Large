import { useState, useEffect } from "react";

const EditBusinessForm = ({ business, businessId }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    // form has valid information
    const [ok, setOk] = useState(false);
    const [errors, setErrors] = useState([]);

    // const { id, title, description, address, city, state, zip } =
    //     business[businessId - 1];
    const handleSubmit = () => {};
    return (
        <form className="business-new_form-container" onSubmit={handleSubmit}>
            <ul>
                {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                ))}
            </ul>
            <label className="business-new_form-title">
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </label>
            <label className="business-new_form-description">
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </label>
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
            <button type="submit">Register this business</button>
        </form>
    );
};

export default EditBusinessForm;
