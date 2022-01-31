import { Link } from "react-router-dom"

function ImageText() {
    return (
        <div className="ImageText">
            <h2 className="image-text-headline">OUR BRANDS.</h2>
            <h3 className="image-text-subhead">Ready to shop sustainably?</h3>
            <Link to="/brands"><button className="image-text-button">Check Out Our Brands</button></Link>
        </div>
    )
}

export default ImageText