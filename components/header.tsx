"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import DropDownMenu from "./DropDownMenu";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!(scrollingDown && currentScrollPos > 80));
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isHomePage
          ? "bg-transparent text-white border-b-2 border-white"
          : "bg-white text-black border-b border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3 w-full">
        <Link
          href="/"
          className={`font-manrope text-xl uppercase font-semibold ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          Kirhillah & Shannah
        </Link>

        <ul
          className={`hidden sm:flex gap-6 text-base capitalize ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Listings</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li>
            <button onClick={scrollToServices} className="hover:underline">
              <Link href="/services">Services</Link>
            </button>
          </li>
          <li><Link href="/gallery">Gallery</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className={`sm:hidden z-50 relative ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            {showMenu ? "Close" : "Menu"}
          </button>
          <button
            className={`hidden sm:block font-bebas border-2 rounded-full px-3 py-1 transition duration-300 ${
              isHomePage
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            <Link href="https://wa.me/254705429463?text=Hello%20there,%20I'm%20interested%20in%20some%20Listings">Contact Us</Link>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <DropDownMenu
            onClose={() => setShowMenu(false)}
            scrollToServices={scrollToServices}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderComponent;
