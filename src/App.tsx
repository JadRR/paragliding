import { useState } from "react";
import Experience from "./components/Experience";
import Pilots from "./components/Pilots";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import { bookFlight } from "./utils/whatsapp";
import { env } from "./config/env";
import Footer from "./components/Footer";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      <header className="header">
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="Club Thermique home"
        >
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

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`navigation${menuOpen ? " navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#experience" onClick={closeMenu}>
            The experience
          </a>
          <a href="#pilots" onClick={closeMenu}>
            Our pilots
          </a>
          <a href="#story" onClick={closeMenu}>
            Our story
          </a>
          <a href="#moments" onClick={closeMenu}>
            Gallery
          </a>
          <a
            className="nav-cta"
            href={bookFlight()}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            LET'S FLY <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <Hero />

        <section className="intro-strip" aria-label="The art of flight">
          <div className="intro-label">THE ART OF FLIGHT</div>
          <p>
            Some things are better <span>experienced than explained.</span>
          </p>
          <img
            src="/images/paragliding.png"
            alt="Thermique Paragliding Club"
            className="wordmark-symbol"
          />
        </section>

        <Experience bookingUrl={bookFlight()} />
        <Reviews tripadvisorUrl={env.tripadvisorUrl} />
        <Pilots />

        {/* OUR STORY */}
        <OurStory />

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="final-cta-top">
            <span>THERMIQUE · SINCE 1992</span>
            <span>LEBANON</span>
          </div>
          <h2>
            STEP OUT OF
            <br />
            THE ORDINARY
            <br />
            <em>INTO THE SKY</em>
          </h2>
          <div className="final-cta-bottom">
            <p>
              Your first flight could be the start of something. Let's find out.
            </p>
            <a
              className="final-book"
              href={bookFlight()}
              target="_blank"
              rel="noreferrer"
            >
              <span>LET'S TALK FLIGHTS</span>
              <span className="final-book-arrow">
                <Arrow diagonal />
              </span>
            </a>
          </div>
        </section>

        <Footer />
      </main>

      <a
        className="whatsapp-tab"
        href={bookFlight()}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire about a flight on WhatsApp"
      >
        <span className="whatsapp-dot" />
        ENQUIRE ABOUT A FLIGHT <Arrow diagonal />
      </a>
    </div>
  );
}

export default App;
