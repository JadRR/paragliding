import { bookFlight } from "../utils/whatsapp";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function OurStory() {
  return (
    <section className="story-editorial" id="story">
      <div className="story-editorial-topline">
        <span>04 — OUR STORY</span>
        <span>ROOTED IN LEBANON</span>
      </div>

      <div className="story-editorial-year">1992</div>

      <div className="story-editorial-content">
        <div className="story-editorial-image">
          <img
            src="/images/heritage.jpg"
            alt="The history and heritage of Thermique Paragliding Club in Lebanon"
            loading="lazy"
          />
          <span>THERMIQUE · ESTABLISHED 1992</span>
        </div>

        <div className="story-editorial-copy">
          <span className="section-kicker">
            LEBANON'S FIRST PARAGLIDING CLUB
          </span>
          <h2>
            First to fly.
            <br />
            Forever
            <br />
            <em>looking up.</em>
          </h2>
          <p>
            Founded in 1992, Club Thermique holds a special place in Lebanon's
            paragliding history as the country's first founded paragliding club.
          </p>
          <p>
            What began with a passion for flight became part of a growing flying
            community, bringing together people drawn to the mountains, the open
            sky, and the freedom of seeing Lebanon from above.
          </p>
          <p>
            For us, paragliding is more than a sport. It is a shared spirit of
            adventure, a connection with nature, and a perspective on our
            country that never loses its magic.
          </p>
          <p>
            More than three decades later, that passion continues to bring
            people together — experienced pilots and first-time flyers alike.
          </p>
          <a
            href={bookFlight()}
            target="_blank"
            rel="noreferrer"
          >
            BE PART OF OUR STORY <Arrow diagonal />
          </a>
        </div>
      </div>

      <div className="story-editorial-bottom">
        <span>EST. 1992 · LEBANON'S FIRST PARAGLIDING CLUB</span>
        <span>THREE DECADES AND COUNTING</span>
      </div>
    </section>
  );
}
