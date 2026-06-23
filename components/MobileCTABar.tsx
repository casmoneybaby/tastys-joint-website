"use client";

import { motion } from "framer-motion";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(245, 197, 24, 0.25)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex items-stretch">
        <a
          href="tel:4157299328"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 bg-ketchup-red hover:bg-red-500 transition-colors duration-200 active:bg-red-700 cursor-pointer"
        >
          <PhoneIconSolid />
          <span className="font-bebas text-base tracking-widest text-white">
            CALL
          </span>
        </a>
        <div className="w-px bg-white/10" />
        <a
          href="https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 bg-surface-dark hover:bg-surface-card transition-colors duration-200 active:bg-grill-black cursor-pointer"
        >
          <PinIconSolid />
          <span className="font-bebas text-base tracking-widest text-cheese-yellow">
            DIRECTIONS
          </span>
        </a>
      </div>
    </motion.div>
  );
}

function PhoneIconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
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

function PinIconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#F5C518"
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
