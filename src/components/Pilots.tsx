type Pilot = {
  name: string;
  role: string;
  image: string;
};

const pilots: Pilot[] = [
  {
    name: "Pilot Name",
    role: "APPI Pro Tandem Pilot",
    image: "/images/pilot-1.jpg",
  },
  {
    name: "Pilot Name",
    role: "APPI Pro Tandem Pilot",
    image: "/images/pilot-2.jpg",
  },
  {
    name: "Pilot Name",
    role: "APPI Pro Tandem Pilot",
    image: "/images/pilot-3.jpg",
  },
  {
    name: "Pilot Name",
    role: "APPI Pro Tandem Pilot",
    image: "/images/pilot-4.jpg",
  },
  {
    name: "Pilot Name",
    role: "APPI Pro Tandem Pilot",
    image: "/images/pilot-5.jpg",
  },
];

export default function Pilots() {
  return (
    <section className="pilots-editorial" id="pilots">
      <div className="pilots-topline">
        <span>03 — THE PEOPLE</span>
        <span>EXPERIENCE YOU CAN TRUST</span>
      </div>

      <div className="pilots-heading">
        <div>
          <span className="pilots-eyebrow">MEET YOUR PILOTS</span>
          <h2>
            Good people.
            <br />
            <em>Great heights.</em>
          </h2>
        </div>

        <p>
          Experienced pilots, internationally certified through APPI and BHPA,
          bringing knowledge, confidence, and a passion for flight to every
          adventure.
        </p>
      </div>

      <div className="pilots-credentials">
        <div className="pilots-certifications">
          <span className="credentials-label">
            INTERNATIONAL CERTIFICATIONS
          </span>

          <div className="certification-logos">
            <img src="/images/appi-logo.png" alt="APPI certification" />
            <img src="/images/bhpa-logo.png" alt="BHPA certification" />
          </div>
        </div>

        <div className="pilots-hours">
          <strong>
            200<span>+</span>
          </strong>
          <div>
            <b>FLIGHT HOURS</b>
            <span>Per pilot</span>
          </div>
        </div>
      </div>

      <div className="pilots-grid">
        {pilots.map((pilot, index) => (
          <article className="pilot-card" key={pilot.image}>
            <div className="pilot-image">
              <img src={pilot.image} alt={pilot.name} loading="lazy" />
              <span className="pilot-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="pilot-info">
              <h3>{pilot.name}</h3>
              <span>{pilot.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
