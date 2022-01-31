

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
        props.brands ? loaded() : loading()
    )
}

export default Brands;