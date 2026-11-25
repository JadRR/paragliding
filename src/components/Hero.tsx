import { bookFlight } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-image"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        aria-label="Paragliding over the mountains of Lebanon"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" />

      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="status-dot" />
          LEBANON · FLY WITH CLUB THERMIQUE
        </div>

        <h1>
          LEAVE THE
          <br />
          GROUND
          <br />
          <em>FIND YOUR FREEDOM</em>
        </h1>

        <div className="hero-bottom">
          <p>
            Leave the ordinary behind.
            <br />
            Discover Lebanon from the sky.
          </p>
          <a
            className="round-link"
            href="#experience"
            aria-label="Discover the flight experience"
          >
            <span>↓</span>
          </a>
        </div>

        <a
          className="hero-booking"
          href={bookFlight()}
          target="_blank"
          rel="noreferrer"
        >
          <span className="booking-icon">↗</span>
          <span>
            <strong>YOUR FIRST FLIGHT STARTS HERE</strong>
            <small>ENQUIRE ABOUT A TANDEM FLIGHT</small>
          </span>
          <span className="booking-arrow">↗</span>
        </a>
      </div>

      <div className="hero-index">33° N — LEBANON</div>
      <div className="hero-vertical">A DIFFERENT POINT OF VIEW</div>
    </section>
  );
}
