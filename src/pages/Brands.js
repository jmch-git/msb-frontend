import { Link } from "react-router-dom";

function Brands(props) {

    // loaded function
    const loaded = () => {
        return props.brands.map((brand) => (
        <div key={brand._id} className="brand-card">
            <a href={brand.website} target="_blank"><img class="brand-image" src={brand.image} alt={brand.name} /></ a>
            <h2 className="brand-headline">{brand.name}</h2>
            <h3 className="brand-subhead">{brand.industry}</h3>
            <h3 className="brand-details">{brand.description}</h3>
        </div>
    ));
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
            </div>
            <div className="brand-container">
           { props.brands ? loaded() : loading() }
           </div>
        </div>
    )
}

export default Brands;