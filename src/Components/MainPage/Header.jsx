import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-black-decoration"></div>

      <picture>
        <source media="(min-width: 1200px)" srcSet="./images/hero-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="./images/hero-tablet.jpg" />
        <img src="./images/hero-mobile.jpg" alt="Hero Image" />
      </picture>

      <div className="header-text">
        <h1>Modern <span>Art Gallery</span></h1>
        <div className="desc-container">
            <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
            <Link to='/location' className='button-container'>
                <button>Our Location</button>
                <img src='./images/icon-arrow-right.svg' alt='Arrow' />
            </Link>
        </div>
      </div>

    </div>
  )
}

export default Header