export const revalidate = 0;

import { getWorksPage, ImageType, ProjectType } from "@/sanity/lib/queries/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const WorksPage = async () => {
  const data = await getWorksPage();

  const { Content, Hero, CallToAction } = data;

  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="py-24 sm:py-32 sm:h-screen max-h-screen flex items-center justify-center bg-black text-white">
        <div className="px-6 sm:px-24 w-full max-w-screen-xl">
          <h1 className="text-5xl sm:text-7xl font-bebas mb-6 pt-40">{Hero.heading}</h1>
          <span className="text-lg italic font-semibold block mb-4">{Hero.tagline}</span>
          <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/NoWyNgAQe34?si=Jthrx77fB35CoOlS&amp;start=10&autoplay=1&mute=1"
              title="YouTube video player"
              allow="autoplay; muted"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative w-full flex flex-col bg-black">
        {Content.map((project: ProjectType, index: number) => {
          const { location, url, imageUrls, excerpt, tagline, projectname } = project;
          const isEven = index % 2 === 0;
          const isLast = index === Content.length - 1;

          return (
            <div
              key={index}
              className={clsx(
                isLast ? "relative" : "sticky top-0",
                "min-h-screen shrink-0 w-full py-20 px-6 sm:px-24 transition-colors duration-500",
                isEven ? "bg-white text-black" : "bg-black text-white"
              )}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start mb-6">
                <div>
                  <h3 className="text-4xl font-bebas mb-2">{projectname}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="font-bold text-lg">{location}</span>
                    <span
                      className={clsx(
                        "border-2 italic rounded-full px-4 py-1 w-fit text-sm",
                        isEven
                          ? "bg-white text-black border-black"
                          : "bg-black text-white border-white"
                      )}
                    >
                      {tagline}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                  <p className="text-base leading-relaxed">{excerpt}</p>
                  <Link
                    href={url}
                    target="_blank"
                    className={clsx(
                      "px-6 py-2 font-bebas text-lg rounded-full border-2 w-fit transition-all",
                      isEven
                        ? "bg-black text-white border-black hover:bg-white hover:text-black"
                        : "bg-white text-black border-white hover:bg-black hover:text-white"
                    )}
                  >
                    See More
                  </Link>
                </div>
              </div>

              {/* Marquee */}
              <div className="relative -mx-[50%]">
                <Marquee className="overflow-hidden" speed={80} pauseOnHover>
                  {imageUrls?.map((image: ImageType, idx: number) => (
                    <div
                      key={idx}
                      className="w-[88vw] sm:w-[450px] aspect-video overflow-hidden shrink-0 flex items-center justify-center cursor-pointer"
                    >
                      <Image
                        loading="lazy"
                        src={image.url}
                        alt={`Project Image ${idx}`}
                        width={450}
                        height={300}
                        className="object-cover h-full w-full px-1 rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          );
        })}

        {/* Spacer */}
        <div className="h-[200px] w-full" />
      </section>

      {/* Call To Action */}
      <section className="py-24 sm:py-32 bg-black text-white flex items-center justify-center">
        <div className="px-6 sm:px-24 w-full max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bebas mb-6 leading-tight">
                {CallToAction.title}
              </h2>
              <Link
                href={CallToAction.link || "/"}
                className="px-6 py-3 font-bebas text-xl border-2 border-white rounded-full transition-all hover:bg-white hover:text-black"
              >
                {CallToAction.label}
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WorksPage;
