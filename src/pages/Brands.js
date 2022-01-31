

function Brands(props) {

    // loaded function
    const loaded = () => {
        return props.brands.map((brand) => (
        <div key={brand._id} className="brand">
            <h1>{brand.name}</h1>
            <img src={brand.image} alt={brand.name} />
        </div>
    ));
  };

  //loading function
  const loading = () => {
    return <h1>Loading...</h1>;
  };

    return (
        <div className="brands">
            <h2 className="tips-headline">Our Brands.</h2>
            <p className="tip-text">Each of the below brands is recommended by our community. They employ sustainable practices and/or provide sustainable products - making it easier for us to be environmentally conscious.</p>
           { props.brands ? loaded() : loading() }
        </div>
    )
}

export default Brands;