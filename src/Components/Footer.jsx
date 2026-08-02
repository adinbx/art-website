

function Footer(props) {
  return (
    <div className={props.light ? "footer-wrapper footer-wrapper-light" : "footer-wrapper"}>
      <div className="footer-container">
            <h3>HFT Art <span>Gallery</span></h3>
            <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
            <div className="footer-icons">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank"><img src="./images/icon-facebook.svg" alt="Facebook"/></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank"><img src="./images/icon-instagram.svg" alt="Instagram"/></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank"><img src="./images/icon-twitter.svg" alt="Twitter"/></a>
            </div>
      </div>
    </div>
  )
}

export default Footer