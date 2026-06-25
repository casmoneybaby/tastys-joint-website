import Image from "next/image";

export default function OurStory() {
  return (
    <div className="content-strip-col">
      <div className="section-label">
        <span className="section-label-title">Our Story</span>
      </div>

      <div className="story-card">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop"
          alt="Sausalito waterfront — home of Tasty's Joint"
          fill
          sizes="(max-width: 1023px) 100vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Dark overlay */}
        <div className="story-overlay" aria-hidden="true" />

        {/* Content */}
        <div className="story-content">
          <p className="story-eyebrow">Built on Passion</p>
          <h2 className="story-headline">
            BUILT ON PASSION.
            <br />
            MADE TO INSPIRE.
          </h2>
          <p className="story-body">
            Tasty&apos;s Joint was born from a simple obsession: the perfect burger.
            Nestled on Caledonia Street in the heart of Sausalito, we source the
            finest local ingredients and craft every patty with pride.
          </p>
          <p className="story-signature">Tasty&apos;s Joint</p>
        </div>
      </div>
    </div>
  );
}
