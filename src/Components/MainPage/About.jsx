function About() {
  return (
    <div className="about-container">
        {/* ==================================== First Group ==================================== */}
        <div className="first-container">
            <div className="group-text">
                <h2>Your day at the gallery</h2>
                <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
            </div>
            <div className="first-image-container">
                <picture className="first-image">
                    <source media="(min-width: 1200px)" srcSet="./images/image-grid-big-desktop.jpg" />
                    <source media="(min-width: 768px)" srcSet="./images/image-grid-big-tablet.jpg" />
                    <img src="./images/image-grid-big-mobile.jpg" alt="Hero Image" />
                </picture>
            </div>
        </div>

        {/* ==================================== Second Group ==================================== */}
        <div className="second-container">
            <div className="big-image">
                <picture>
                    <source media="(min-width: 1200px)" srcSet="./images/image-grid-desktop.jpg" />
                    <source media="(min-width: 768px)" srcSet="./images/image-grid-tablet.jpg" />
                    <img src="./images/image-grid-mobile.jpg" alt="Hero Image"/>
                </picture>
            </div>

            <div className="side-image-text">
                <picture className="third-image">
                    <source media="(min-width: 1200px)" srcSet="./images/image-grid-small-desktop.jpg" />
                    <source media="(min-width: 768px)" srcSet="./images/image-grid-small-tablet.jpg" />
                    <img src="./images/image-grid-small-mobile.jpg" alt="Hero Image" />
                </picture>

                <div className="group-text group-text-dark">
                    <h2>Come &amp; be <span>inspired</span>.</h2>
                    <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About