import Image from "next/image";
import Link from "next/link";

const burgers = [
  {
    name: "The Sausalito",
    desc: "A local favorite with garlic aioli, bacon jam, aged cheddar & arugula",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Truffle Smash",
    desc: "Double smash patties, truffle aioli, pickled onions, American cheese",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Spicy Cali",
    desc: "Jalapeños, pepper jack, chipotle aioli, lettuce, tomato, red onion",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80&auto=format&fit=crop",
  },
];

export default function SignatureBurgers() {
  return (
    <div className="content-strip-col" id="menu">
      <div className="section-label">
        <span className="section-label-title">Signature Burgers</span>
        <Link href="/menu" className="section-label-link" aria-label="View all burgers">
          VIEW ALL
        </Link>
      </div>

      <div className="burger-cards">
        {burgers.map((burger) => (
          <div key={burger.name} className="burger-card" role="article">
            <div className="burger-card-image">
              <Image
                src={burger.image}
                alt={`${burger.name} burger`}
                fill
                sizes="80px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="burger-card-content">
              <p className="burger-card-name">{burger.name}</p>
              <p className="burger-card-desc">{burger.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
