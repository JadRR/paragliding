type ExperienceProps = {
  bookingUrl: string;
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Experience({ bookingUrl }: ExperienceProps) {
  return (
    <section className="experience-editorial" id="experience">
      <div className="experience-topline">
        <span>01 — THE EXPERIENCE</span>
        <span>LEBANON, FROM AN EAGLE POINT OF VIEW</span>
      </div>

      <div className="experience-image">
        <img
          src="/images/mountain-flight.jpg"
          alt="A paraglider flying over the Lebanese mountains"
          loading="lazy"
        />
        <div className="experience-image-shade" />
        <div className="experience-image-copy">
          <span>OPEN YOUR WINGS. TAKE OFF.</span>

          <h2>
            YOUR FIRST FLIGHT
            <br />
            YOUR LIFETIME
            <br />
            <em>STORY</em>
          </h2>

          <p>MEMORIES YOU CARRY YOU FOREVER</p>
        </div>
        <span className="experience-image-caption">
          THE FREEDOM OF FLIGHT · CLUB THERMIQUE
        </span>
      </div>

      <div className="experience-bottom">
        <div className="experience-bottom-copy">
          <p>
            With more than 30 years of experience, Club Thermique has been
            sharing the freedom of flight with generations of adventure seekers.
            It begins with a few steps, a little anticipation, and the mountains
            stretching out in front of you. Then, almost before you realise it,
            the ground falls away.
          </p>

          <p>
            Fly tandem with our internationally certified pilots, who take care
            of every part of the flight while you take in the open sky, the
            quiet, and the breathtaking views as you soar above Jounieh Bay.
          </p>

          <p className="experience-signature">
            An endless SKY. An endless STORY.
          </p>
        </div>

        <a href={bookingUrl} target="_blank" rel="noreferrer">
          YOUR FIRST FLIGHT <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
