import {Link} from "react-router-dom"

function About () {
    return (
        <div className="about">
            <div className="about-image">
                <img className="trees-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643652878/my-sustainable-brand/favpng_pine-tree-fir-clip-art_wua9dk.png" alt="trees" />
            </div>
            <div className="about-text">
                <h2 className="about-headline">OUR MISSION.</h2>
                <p className="about-text">
                    An easy change we can make as consumers is to support businesses that are intentional about meeting social and environmental standards. But there are so many brands out there, 
                    it's hard to know which ones employ these sustainable practices. This community allows people to recommend brands they know and trust - as well as see other's recommendations and learn tips and tricks to further sustainability.
                </p>
                <br></br>
                <p className="about-text">You can view our brands at any time. In order to make a recommendation, you'll need to log-in (just click the button at the top of the page)</p>
                <Link to="/brands/add"><button className="image-text-button" id="brand-btn">Make a Recommendation</button></Link>
            </div>
        </div>
    )
}

export default About