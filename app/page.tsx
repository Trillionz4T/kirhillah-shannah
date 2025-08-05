import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <section
        id="section"
        className="h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative w-full flex items-center justify-center"
      >
        <div id="container" className="w-full h-full sm:px-24 px-6">
          <Image
            src="/images/realty37.56 (2).jpeg"
            alt="best luxury real estate hero background"
            fill
            className="w-full h-full object-cover absolute z-0"
          />

          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start w-full h-full pt-24">
            {/* Left: Text */}
            <div className="flex flex-col sm:max-w-[60%] gap-4 text-white">
              <h1 className="font-bebas text-4xl sm:text-5xl leading-tight">
                Discover East Africa&apos;s Finest Luxury Living with Kirhillah & Shannah
              </h1>
              <p className="text-base sm:text-lg font-manrope leading-relaxed">
                At Kirhillah & Shannah, we specialize in premium properties tailored for those
                who demand excellence — from exclusive homes for sale to high-end rentals.
                Our mission is simple: deliver elite experiences and build lasting value.
                Join the many who call Kirhillah & Shannah their most valuable move.
              </p>
            </div>

            {/* Right: Button */}
            <div className="mt-6 sm:mt-32 sm:self-end">
               <Link href="/works">
              <button className="font-bebas text-white bg-black hover:text-black hover:bg-white transition duration-300 text-lg rounded-full px-9 py-2">
                Explore
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    <section id="section" className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center">
      <div id="container" className="px-6 sm:px-24 w-full h-full">

        <div className="flex gap-6 xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">

        <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
          <h2 className="uppercase text-xl">Redefining Prestige, One Property at a Time</h2>
          <p className="text-base">From prime investment properties to luxury homes, Kirhillah & Shannah is the trusted choice for those who demand the best.</p>
        </div>

        <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-2/4">
          <p className="text-base">At Kirhillah & Shannah, we don't just sell homes — we curate lifestyles. With an unmatched portfolio of high-end properties for sale and for let, we&apos;re trusted by elite clients, families, and investors across East Africa and beyond.<br /> Every detail, every transaction, and every experience is rooted in our commitment to excellence, discretion, and legacy. Discover why the most discerning clients choose us.</p>
          <Link href="/blog">
          <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">Explore Listings</button>
          </Link>
        </div>
      </div>

      </div>
    </section>

    <section id="section" className="overflow-hidden h-fit relative w-full justify-center flex items-center">
       <div id="" className="px-6 sm:px-24 w-full h-full">
           <p className="uppercase text-[100vh] leading-none font-bebas tracking-tighter">Kirhillah&Shannah</p>
           <Image src={"/images/realty37.55 (1).jpeg"} alt="coastal property for sale" width={420} height={420} className="h-3/4 w-3/4 absolute sm:w-fit sm:left-[55%] top-0 object-cover" />
       </div>
    </section>

    <section id="section" className="h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"> 
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="w-full realtive mb-6 sm:mb-0">
          <Link href="/works">
          <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">See Our Works</button>
          </Link>
        </div>
        <div className="w-full h-full flex items-center justify-center">   
          <Marquee className="w-hull h-full">
            <Image src={"/images/k&s16.jpeg"} 
                   alt="best luxury real estate" 
                   width={320} 
                   height={320} 
                   className="h-3/4 w-full sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover" />
            <Image src={"/images/k&s11.jpeg"} 
                   alt="best luxury real estate" 
                   width={320} 
                   height={320} 
                   className="h-3/4 w-full sm:w-1/4 sm:left-0 bottom-0 sm:absolute object-cover" />
            <Image src={"/images/k&s1.jpeg"} 
                   alt="best luxury real estate" 
                   width={320} 
                   height={320} 
                   className="h-2/4 w-full sm:w-1/4 sm:right-0 bottom-0 sm:absolute object-cover" />
          </Marquee></div>
       
      </div>
    </section>

    <section id="scetion" className="h-fit sm:h-screen py-6 relative w-full justify-center flex items-center">
      <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center">
             <h3 className="text-5xl font-bebas pb-6 pt-0">What We Offer</h3>
          </div>
        <div className="flex w-full h-full gap-6 flex-col sm:flex-row justify-between items-center pb-2">
          <div className="w-full sm:w-1/2 flex justify-center relative items-center h-[230px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-xl">
             <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">Properties For Sale</span>
             <Image
              src={"/images/realty101.jpg"}
              alt="best luxury real estate"
              width={320}
              height={320}
              className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
              />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center relative items-center h-[230px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-xl">
             <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">Properties For Rent</span>
                <Image
              src={"/images/realty37.52 (1).jpeg"}
              alt="best luxury real estate"
              width={320}
              height={320}
              className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
              />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center relative items-center h-[230px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-xl">
             <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">Off-Plan</span>
                <Image
              src={"/images/k&s2.jpeg"}
              alt="best luxury real estate"
              width={320}
              height={320}
              className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
              />
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
