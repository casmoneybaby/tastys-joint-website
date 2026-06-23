"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "11:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 9:00 PM" },
  { day: "Thursday", time: "11:00 AM – 9:00 PM" },
  { day: "Friday", time: "11:00 AM – 9:00 PM" },
  { day: "Saturday", time: "11:00 AM – 9:00 PM" },
  { day: "Sunday", time: "11:00 AM – 9:00 PM" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Location() {
  return (
    <section
      id="location"
      className="section-padding bg-grill-black relative overflow-hidden"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cheese-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-inter text-xs text-cheese-yellow uppercase tracking-[0.3em] mb-3">
            Find Us
          </p>
          <h2 className="font-bebas text-[clamp(3rem,6vw,5.5rem)] tracking-widest text-cream-white leading-none">
            WHERE TO FIND US
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/10 relative"
          >
            <div className="relative" style={{ paddingBottom: "62%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d-122.4853!3d37.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085966e0b6a9b33%3A0x123456!2s43+Caledonia+St%2C+Sausalito%2C+CA+94965!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tasty's Joint Location Map"
              />
            </div>

            {/* Map overlay info card */}
            <div className="bg-surface-dark p-5 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-bebas text-xl tracking-widest text-cream-white">
                    43 Caledonia St
                  </p>
                  <p className="font-inter text-sm text-muted-text">
                    Sausalito, CA 94965
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-3 px-6"
                >
                  <DirectionsIcon />
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Hours card */}
            <div className="bg-surface-dark rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-3 mb-5">
                <ClockIcon />
                <h3 className="font-bebas text-2xl tracking-widest text-cream-white">
                  OPEN DAILY 11 AM – 9 PM
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 ${
                      h.day === today
                        ? "text-cheese-yellow"
                        : "text-muted-text"
                    }`}
                  >
                    <span className="font-inter text-sm font-medium">
                      {h.day === today ? `${h.day} (Today)` : h.day}
                    </span>
                    <span className="font-inter text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-surface-dark rounded-2xl p-7 border border-white/5">
              <h3 className="font-bebas text-2xl tracking-widest text-cream-white mb-5">
                CONTACT US
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:4157299328"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-grill-black border border-white/5 hover:border-cheese-yellow/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-cheese-yellow/10 flex items-center justify-center text-cheese-yellow">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-muted-text uppercase tracking-widest mb-0.5">
                      Call Ahead
                    </p>
                    <p className="font-bebas text-xl tracking-widest text-cream-white group-hover:text-cheese-yellow transition-colors">
                      (415) 729-9328
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-grill-black border border-white/5 hover:border-ketchup-red/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-ketchup-red/10 flex items-center justify-center text-ketchup-red">
                    <PinIcon />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-muted-text uppercase tracking-widest mb-0.5">
                      Address
                    </p>
                    <p className="font-bebas text-xl tracking-widest text-cream-white group-hover:text-ketchup-red transition-colors">
                      43 Caledonia St
                    </p>
                    <p className="font-inter text-xs text-muted-text">
                      Sausalito, CA 94965
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DirectionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5C518"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
