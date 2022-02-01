import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateForm(props) {
    const history = useHistory();
    const [newForm, setNewForm] = useState({
        name: "",
        website: "",
        industry: "",
        description: "",
        image: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handleSubmit function for the form
    const handleSubmit = (event) => {
        if (!props.user) return;
        event.preventDefault();
        props.createBrands(newForm);
        history.push("/brands");
    };

    const loaded = () => {
        return (
            <div>
                {
                    props.user &&
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={newForm.name}
                                placeholder="Tesla"
                                onChange={handleChange}
                            />
                            <label htmlFor="website">Website: </label>
                            <input
                                type="text"
                                name="website"
                                value={newForm.website}
                                placeholder="tesla.com"
                                onChange={handleChange}
                            />
                            <label htmlFor="industry">Select an Industry: </label>
                            <select name="industry" value={newForm.industry} onChange={handleChange}>
                                <option value="fashion">Fashion</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Makeup and Self Care">Makeup and Self Care</option>
                                <option value="Food/Restaurants">Restaurants</option>
                                <option value="Household Products">Household Products</option>
                            </select>
                            <label htmlFor="description">Description/Notes: </label>
                            <input
                                type="text"
                                name="description"
                                value={newForm.description}
                                placeholder="fuel efficient cars"
                                onChange={handleChange}
                            />
                            <label htmlFor="image">Image URL: </label>
                            <input
                                type="text"
                                name="image"
                                value={newForm.image}
                                placeholder="image url"
                                onChange={handleChange}
                            />
                            <div className="form">
                                <input className="form-btn" type="submit" value="Suggest Brand" />
                            </div>
                        </fieldset>
                    </form>
                }

            </div>

        )
    }

    const loading = () => {
        return <h2 className="login">Login to Add Your Favorite Sustainable Brand</h2>
    }

    return props.user ? loaded() : loading()
}

export default CreateForm;