function Hero() {
    return (
        <div className="hero">
            <video className="background-video" autoPlay loop muted>
                    <source src='https://res.cloudinary.com/dhbumhhh1/video/upload/v1643572605/my-sustainable-brand/pexels-mikhail-nilov-8435904_1_rtj8tz.mp4' type="video/mp4" />
            </video>
            <div className="video-overlay">
                <h2 className="hero-headline">Sustainability.</h2>
                <h3 className="hero-subhead">Brands that produce great products, sustainably</h3>
                <p className="hero-copy">We are making it easy to shop with sustainable brands and recommend your favorite brands to others.</p>
            </div>
        </div>
    )
}

export default Hero;