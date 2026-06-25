import SignatureBurgers from "./SignatureBurgers";
import OurStory from "./OurStory";
import Reviews from "./Reviews";

export default function ContentStrip() {
  return (
    <section className="content-strip" aria-label="Explore Tasty's Joint">
      <SignatureBurgers />
      <OurStory />
      <Reviews />
    </section>
  );
}
