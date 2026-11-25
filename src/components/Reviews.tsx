import { bookFlight } from "../utils/whatsapp";

type ReviewsProps = {
  tripadvisorUrl: string;
  widgetCode?: string;
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

const gallery = [
  {
    image: "/images/gallery-1.jpg",
    alt: "A guest enjoying a tandem paragliding flight",
  },
  {
    image: "/images/gallery-2.jpg",
    alt: "A memorable day flying with Thermique",
  },
  {
    image: "/images/gallery-3.jpg",
    alt: "Paragliding above the Lebanese landscape",
  },
  {
    image: "/images/gallery-4.jpg",
    alt: "Flyers sharing their paragliding experience",
  },
  {
    image: "/images/gallery-5.jpg",
    alt: "A happy moment after a paragliding flight",
  },
  {
    image: "/images/tandem-flight.jpg",
    alt: "A tandem paragliding experience with Thermique",
  },
];

export default function Reviews({ tripadvisorUrl }: ReviewsProps) {
  return (
    <section className="moments-editorial" id="moments">
      {/* GALLERY INTRO */}
      <div className="moments-topline">
        <span>02 — THE THERMIQUE JOURNAL</span>
        <span>REAL PEOPLE. REAL FLIGHTS.</span>
      </div>

      <div className="moments-heading">
        <h2>
          Real people.
          <br />
          <em>Real moments.</em>
        </h2>
        <p>
          First flights, unforgettable views, and memories made above Lebanon.
          Every flight has a story.
        </p>
      </div>

      {/* PHOTO GALLERY */}
      <div className="moments-gallery">
        {gallery.map((photo, index) => (
          <figure className="moment" key={photo.image}>
            <img src={photo.image} alt={photo.alt} loading="lazy" />
            <figcaption>
              {String(index + 1).padStart(2, "0")} / THERMIQUE MOMENTS
            </figcaption>
          </figure>
        ))}
      </div>

      {/* TRIPADVISOR REVIEWS */}
      <div className="moments-reviews" id="reviews">
        <div className="reviews-heading">
          <div>
            <span className="reviews-eyebrow">
              DON'T JUST TAKE OUR WORD FOR IT
            </span>
            <h2>
              The best stories
              <br />
              <em>come from above.</em>
            </h2>
          </div>

          <p>
            Every flight leaves a memory. Discover what people who have flown
            with Thermique have to say about their experience.
          </p>
        </div>

        <div className="reviews-widget">
          <div className="reviews-widget-header">
            <img
              src="/images/tripadvisor-logo.png"
              alt="Tripadvisor"
              className="tripadvisor-logo"
            />

            <a href={tripadvisorUrl} target="_blank" rel="noreferrer">
              VIEW ALL Tripadvisor REVIEWS ↗
            </a>
          </div>

          <div className="reviews-widget-content">
            {/* Official Tripadvisor widget embed goes here */}
            <p>
              Tripadvisor reviews will appear here once the official widget is
              connected.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL BOOKING INVITATION */}
      <div className="flyers-invite">
        <div className="flyers-invite">
          <div className="flyers-invite-copy">
            <span className="section-kicker">YOUR TURN TO FLY</span>

            <h3>
              The mountains are waiting.
              <br />
              <em>Your story begins here.</em>
            </h3>

            <p className="flyers-invite-subtitle">
              One click. One flight. A memory that stays with you long after
              your feet touch the ground.
            </p>
          </div>

          <a
            href={bookFlight()}
            target="_blank"
            rel="noreferrer"
            className="flyers-book-link"
          >
            START YOUR STORY <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
