import Image from "next/image";

export default function InfoBar() {
  return (
    <aside className="info-bar" aria-label="Restaurant information" id="visit">
      {/* Visit Us */}
      <div className="info-bar-cell">
        <MapPinIcon />
        <p className="info-bar-title">Visit Us</p>
        <p className="info-bar-text">
          43 Caledonia St
          <br />
          Sausalito, CA 94965
        </p>
      </div>

      {/* Call Us */}
      <div className="info-bar-cell">
        <PhoneIcon />
        <p className="info-bar-title">Call Us</p>
        <p className="info-bar-text">
          <a href="tel:4157299328" aria-label="Call Tasty's Joint">(415) 729-9328</a>
        </p>
      </div>

      {/* Hours */}
      <div className="info-bar-cell">
        <ClockIcon />
        <p className="info-bar-title">Hours</p>
        <p className="info-bar-text">
          Mon–Thu 11AM–9PM
          <br />
          Fri–Sat 11AM–10PM
          <br />
          Sun 11AM–8PM
        </p>
      </div>

      {/* Follow Us */}
      <div className="info-bar-cell" id="contact">
        <SocialIcon />
        <p className="info-bar-title">Follow Us</p>
        <div className="info-bar-socials">
          <a
            href="#"
            className="info-bar-social-btn"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            className="info-bar-social-btn"
            aria-label="Follow us on Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="info-bar-social-btn"
            aria-label="Find us on Yelp"
          >
            <YelpIcon />
          </a>
        </div>
      </div>

      {/* Dine With Us */}
      <div className="info-bar-cell">
        <DineIcon />
        <p className="info-bar-title">Dine With Us</p>
        <p className="info-bar-text" style={{ fontSize: "0.72rem", color: "var(--gray)" }}>
          Walk-ins welcome! Great food. Good people. See you soon.
        </p>
        <div className="info-bar-interior">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&q=80&auto=format&fit=crop"
            alt="Tasty's Joint interior dining"
            fill
            sizes="200px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </aside>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="info-bar-icon"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="info-bar-icon"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.37 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.68 5.68l.91-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="info-bar-icon"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="info-bar-icon"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function DineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="info-bar-icon"
      aria-hidden="true"
    >
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  );
}
