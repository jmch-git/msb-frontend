import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateForm(props) {
    const history = useHistory();
    const [ newForm, setNewForm ] = useState({
        name: "",
        website: "",
        industry: "",
        description: "",
        image: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value});
    };

    // handleSubmit function for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createBrands(newForm);
        history.push("/brands");        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={newForm.name} 
                    placeholder="name"
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    name="website" 
                    value={newForm.website} 
                    placeholder="website"
                    onChange={handleChange}
                    />
                <label htmlFor="industry">Select an Industry</label>   
                <select name="industry" value={newForm.industry} onChange={handleChange}>
                    <option value="fashion">Fashion</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Makeup and Self Care">Makeup and Self Care</option>
                    <option value="Food/Restaurants">Restaurants</option>
                    <option value="Household Products">Household Products</option>
                </select>
                <input 
                    type="text" 
                    name="description" 
                    value={newForm.description} 
                    placeholder="description"
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    name="image" 
                    value={newForm.image} 
                    placeholder="image"
                    onChange={handleChange}
                    />  
                <input type="submit" value="Suggest Brand" />                      
            </form>
        </div>
    )
}

export default CreateForm;