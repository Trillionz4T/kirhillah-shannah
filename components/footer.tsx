
import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
   <footer className="sm:h-screen overflow-hidden sm:py-24 bg-white py-6 h-fit">
      <div
        id="container"
        className=" px-6 sm:px-24 overflow-hidden w-full h-full"
      >
         <div className="w-full h-full justify-center items-center flex flex-col mb-6 sm:mb-0">
          <p className="font-bebas text-black text-[12vw] leading-none pb-5">
            Let's talk{" "}
          </p>
          <ul className="flex justify-center sm:flex-row items-center sm:gap-6">
            <li className="flex gap-3 border-2 border-black hover:bg-black text-black hover:text-white hover:border-white duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://www.instagram.com/kirhillah_shannah?igsh=emN0N3c4NW0wZnc5" target="-blank">
               Instagram
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-black hover:bg-black text-black hover:text-white hover:border-white duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://wa.me/254705429263" target="_blank">
                Whatsapp
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-black hover:bg-black text-black hover:text-white hover:border-white duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://www.instagram.com/kirhillah_shannah?igsh=emN0N3c4NW0wZnc5" target="_blank">
                Facebook
              </Link>
            </li>
          </ul>
        </div> 
      </div>
    </footer> 
  );
};

export default FooterComponent;
