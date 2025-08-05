export const revalidate = 0;

import { getGalleryPage, ImageType } from "@/sanity/lib/queries/page";
import Image from "next/image";
import Link from "next/link";

const randomColumns = () => {
  const columnSizes = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1 md:row-span-2",
    "col-span-1 md:col-span-2 row-span-2",
  ];
  const randomIndex = Math.floor(Math.random() * columnSizes.length);
  return columnSizes[randomIndex];
};

const GalleryPage = async () => {
  const data = await getGalleryPage();
  const { Gallery } = data;

  return (
    <section
      id="section"
      className="relative w-full py-24 flex justify-center items-center overflow-hidden bg-gradient-to-br from-white via-[#f2f2f2] to-[#d9d9d9]"
    >
      <div className="w-full h-full px-6 md:px-20 max-w-screen-xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bebas text-black tracking-wide uppercase">
            Gallery
          </h1>
          <p className="text-base sm:text-lg font-semibold italic text-gray-700 mt-2">
            Some of Our Finest Work is Showcased Below
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Gallery?.imageUrls?.map((image: ImageType, index: number) => {
            if (!image?.url) return null;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 ease-in-out ${randomColumns()}`}
              >
                <Link href="/">
                  <Image
                    src={image.url}
                    alt={`Gallery Image ${index + 1}`}
                    width={420}
                    height={280}
                    className="w-full h-full object-cover rounded-2xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </Link>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
