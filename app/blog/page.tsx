"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPosts } from "@/sanity/lib/queries/posts";

// Post type
type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  imageUrl: string;
  price?: string;
  status?: "For Sale" | "To Let";
  location?: string;
};

// Skeleton loader
const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl overflow-hidden shadow border">
    <div className="h-64 bg-gray-200" />
    <div className="p-4 space-y-2">
      <div className="h-4 bg-gray-300 w-3/4 rounded" />
      <div className="h-3 bg-gray-300 w-1/2 rounded" />
    </div>
  </div>
);

const ListingPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData: Post[] = await getPosts();
      setPosts(postsData);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    statusFilter === "All" ? true : post.status === statusFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Explore Luxury Listings
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "For Sale", "To Let"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-full border transition ${
              statusFilter === status
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(6)
              .fill(null)
              .map((_, i) => <SkeletonCard key={i} />)
          : filteredPosts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-shadow duration-300 relative"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Price Tag */}
                    {post.price && (
                      <div className="absolute top-4 right-4 bg-white bg-opacity-80 text-black font-bold px-3 py-1 rounded-lg text-sm shadow">
                        {post.price}
                      </div>
                    )}

                    {/* Badge */}
                    {post.status && (
                      <div className="absolute top-4 left-4 bg-black text-white font-medium px-3 py-1 rounded-full text-xs shadow uppercase">
                        {post.status}
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {post.location || "Mombasa, Kenya"}
                    </p>
                    <div className="text-xs text-gray-400 mt-1">
                      {post.author} •{" "}
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default ListingPage;
