// components/DropDownMenu.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToServices }) => {
  return (
    <motion.div
      className="w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-800 bg-opacity-50 text-silver-900 backdrop-blur-300 p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl sm:hidden"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" onClick={onClose} className="block text-lg uppercase hover:underline">
        Home
      </Link>
      <Link href="/listings" onClick={onClose} className="block text-lg uppercase hover:underline">
        Listings
      </Link>
      <Link href="/works" onClick={onClose} className="block text-lg uppercase hover:underline">
        Works
      </Link>
      <button
        onClick={() => {
          scrollToServices();
          onClose();
        }}
        className="block text-lg uppercase hover:underline"
      >
        Services
      </button>
      <Link href="/gallery" onClick={onClose} className="block text-lg uppercase hover:underline">
        Gallery
      </Link>
      <button onClick={onClose} className="mt-8 text-sm underline opacity-70 hover:opacity-100">
        Close Menu
      </button>
    </motion.div>
  );
};

export default DropDownMenu;
