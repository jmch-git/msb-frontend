import { Link } from "react-router-dom";
import { useState } from "react"

function Brands(props) {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }

    // loaded function
    const loaded = () => {
        return (
            <>
            {props.brands
                .filter((value) => {
                    if (search === "") {
                    return value;
                    } else if (
                    value.name.toLowerCase().includes(search.toLocaleLowerCase())
                    ) {
                    return value;
                    }
          }).map((brand) => (
            <div key={brand._id} className="brand-card">
                <a href={brand.website} target="_blank"><img class="brand-image" src={brand.image} alt={brand.name} /></ a>
                <h2 className="brand-headline">{brand.name}</h2>
                <h3 className="brand-subhead">{brand.industry}</h3>
                <h3 className="brand-details">{brand.description}</h3>
                <Link to={`/brands/${brand._id}`}><button className="edit-btn">Edit Brand</button></Link>
            </div>
        ))}
        </>
        );            
    };

  //loading function
  const loading = () => {
    return <h1>Loading...</h1>;
  };

    return (
        <div className="brands">
            <div className="intro">
                <h2 className="tips-headline">Our Brands.</h2>
                <p className="tips-text">Each of the below brands is recommended by our community. They employ sustainable practices and/or provide sustainable products - making it easier for us to be environmentally conscious.</p>
                <h3 className="brand-add-text">Have a brand you want to go ahead and add to the list?</h3>
                <Link to="/brands/add"><button className="add-brand-button">Make a Recommendation</button></Link>
                <form className="form">
                    <label>Or search for a brand: </label> <br></br>
                    <input
                        placeholder="Just start typing a name..."
                        name="search"
                        onChange={handleChange}
                        id="search-label"
                    />
                </form>
            </div>
            <div className="brand-container">
           { props.brands ? loaded() : loading() }
           </div>
        </div>
    );
  
}

export default Brands;