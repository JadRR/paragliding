import { env } from "../config/env";
import { bookFlight } from "../utils/whatsapp";
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <a className="wordmark footer-wordmark" href="#home">
            <img
              src="/images/paragliding.png"
              alt="Thermique Paragliding Club"
              className="wordmark-symbol"
            />

            <span className="wordmark-text">
              <strong>CLUB THERMIQUE</strong>
              <small>PARAGLIDING CLUB</small>
            </span>
          </a>

          <p className="footer-motto">
            A passion for flight.
            <br />A legacy since 1992.
          </p>
          <br />
          <div className="footer-socials">
            <span className="footer-label">FOLLOW OUR JOURNEY</span>

            <div className="footer-social-links">
              <a
                href={env.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src="/images/facebook.png" alt="Facebook" />
              </a>

              <a
                href={env.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>

              <a
                href={env.tripadvisorUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Tripadvisor"
              >
                <img src="/images/tripadvisor.png" alt="Tripadvisor" />
              </a>

              <a
                href={bookFlight()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img src="/images/whatsapp.png" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <span className="footer-label">GET IN TOUCH</span>
          <h3>Ready when you are.</h3>

          <a href={bookFlight()} target="_blank" rel="noreferrer">
            CONTACT US ON WHATSAPP <Arrow />
          </a>

          <a href={`tel:${env.phoneNumber}`} className="footer-phone">
            {env.phoneDisplay}
          </a>
        </div>

        {/* LOCATION */}
        <div className="footer-location">
          <span className="footer-label">FIND US</span>
          <h3>Jounieh, Lebanon.</h3>

          <p>
            Experience the Lebanese mountains and soar above the beautiful
            coastline of Jounieh Bay.
          </p>

          <a href={env.googleMapsUrl} target="_blank" rel="noreferrer">
            GET DIRECTIONS <Arrow />
          </a>
        </div>
      </div>

      {/* FOOTER NAVIGATION */}
      <div className="footer-navigation">
        <a href="#experience">EXPERIENCE</a>
        <a href="#pilots">OUR PILOTS</a>
        <a href="#moments">GALLERY</a>
        <a href="#reviews">REVIEWS</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} THERMIQUE PARAGLIDING CLUB</span>

        <a href="#home">BACK TO TOP ↑</a>

        <span>MADE FOR THE SKY.</span>
      </div>
    </footer>
  );
}
