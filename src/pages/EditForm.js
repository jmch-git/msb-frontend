import { useState } from "react";

function EditForm(props) {
    const id = props.match.params.id;
    const brands = props.brands;
    const brand = brands.find(b => b._id === id);

    const [editForm, setEditForm] = useState(brand)




    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        if (!props.user) return;
        event.preventDefault();
        props.updateBrands(editForm, brand._id);
        props.history.push('/brands')
    };



    const loaded = () => {
        return (
            <div>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            value={editForm.name}
                            name="name"
                            placeholder="Company Name"
                            onChange={handleChange}
                        />
                        <label htmlFor="website">Website: </label>
                        <input
                            type="text"
                            value={editForm.website}
                            name="website"
                            placeholder="Company Website"
                            onChange={handleChange}
                        />
                        <label htmlFor="industry">Select an Industry: </label>
                        <select value={editForm.industry} name="industry" onChange={handleChange}>
                            <option value="Fashion">Fashion</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Makeup and Self Care">Makeup and Self Care</option>
                            <option value="Food/Restaurants">Food and Restaurants</option>
                            <option value="Household Products">Household Products</option>
                        </select>
                        <label htmlFor="description">Description/Notes: </label>
                        <input
                            type="text"
                            value={editForm.description}
                            name="description"
                            placeholder="description"
                            onChange={handleChange}
                        />
                        <label htmlFor="image">Image URL: </label>
                        <input
                            type="text"
                            value={editForm.image}
                            name="image"
                            placeholder="image url"
                            onChange={handleChange}
                        />
                        <div className="form">
                            <input className="form-btn" type="submit" value="Update Brand" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
    const loading = () => {
        return <h2 className="login">Login to Edit this Brand</h2>
    }
    return props.user ? loaded() : loading()
}


export default EditForm;