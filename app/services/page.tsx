export const revalidate = 0;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

// Replace these later with actual CMS queries if needed
const services = [
  {
    title: "Off-Plan Properties",
    description: "Secure premium real estate at introductory prices in Mombasa’s top locations like Nyali, Bamburi & Kizingo.",
    image: "/images/k&s1.jpeg",
  },
  {
    title: "Property Sales",
    description: "Explore prime residential & commercial listings in Nairobi, Mombasa, Nakuru and beyond.",
    image: "/images/realty37.55 (3).jpeg",
  },
  {
    title: "Land Investment",
    description: "Strategic land parcels in rapidly developing zones, ideal for long-term growth or development.",
    image: "/images/realty (1).jpeg",
  },
  {
    title: "Property Management",
    description: "Let Kirhillah & Shannah handle tenanting, maintenance, rent collection & reporting professionally.",
    image: "/images/realty38.02 (1).jpeg",
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-gradient-to-b from-white to-[#f4f4f4] text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4">
        <Image
          src="/images/hero-real-estate.jpg"
          alt="Kirhillah Real Estate"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-70"
        />
        <div className="relative z-10 max-w-3xl text-silver-900">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Elevating Real Estate Excellence
          </h1>
          <p className="mt-8 text-lg md:text-xl font-light">
            Discover a smarter, stylish way to invest, buy, or manage property with Kirhillah & Shannah.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 pt-0 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 px-4 md:px-16 bg-[#e6e6e6]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Watch Kirhillah & Shannah In Action
        </h2>
        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/UmofbHw0K1s"
            title="Kirhillah Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Image Gallery Marquee */}
      <section className="py-12">
        <Marquee pauseOnHover gradient={false} speed={40}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Image
              key={idx}
              src={`/images/gallery${idx + 1}.jpg`}
              alt={`Gallery ${idx + 1}`}
              width={300}
              height={200}
              className="rounded-lg mx-4 shadow-md object-cover"
            />
          ))}
        </Marquee>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-20 px-6 text-center pb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Invest in the Future?
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Our team is here to guide you through every step. Whether you&apos;re buying, selling, or investing — Kirhillah & Shannah is your trusted partner.
        </p>
      
      <Link href="https://wa.me/254705429263?text=I%20want%20to%20know%20more%20about%20Kirhillah">
          <h3 className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Book a Free Consultation
          </h3>
      </Link>
        
        
      </section>
    </main>
  );
};

export default ServicesPage;
