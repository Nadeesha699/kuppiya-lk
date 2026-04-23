"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "@/app/lib/post";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export const ArticlesSection = () => {
  const categories = ["All", "Film", "Tech", "Facts"];

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const perPage = 10;

  // FILTER
  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  // SAFE TOTAL PAGES
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  // PAGINATION SLICE
  const currentArticles = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <section id="articles" className="bg-black text-white py-20 px-6">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl font-bold mb-6 w-full text-center"
      >
        Article<span className="text-blue-500">s</span>
      </motion.h1>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center gap-4 mb-10 flex-wrap"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setPage(1);
            }}
            className={`px-4 py-1 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue-500 border-blue-500"
                : "border-zinc-700 text-zinc-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto"
      >
        {currentArticles.map((a) => {
          const isLong = a.content.split(" ").length > 10;

          return (
            <div
              key={a.id}
              className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg hover:border-blue-500 transition"
            >
              <h3 className="font-bold mb-2">{a.title}</h3>
              <p className="text-zinc-400 text-sm">
                {isLong ? a.content.slice(0, 120) + "..." : a.content}
              </p>
              <span className="text-xs text-blue-400 block mt-2">
                {a.category}
              </span>
              {isLong && (
                <Link
                  href={`/post/${a.slug}`}
                  className="text-blue-400 text-xs mt-2 block hover:underline"
                >
                  Read More →
                </Link>
              )}
            </div>
          );
        })}
      </motion.div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className={`px-4 py-2 rounded ${
            page === 1
              ? "bg-zinc-700 text-zinc-500 cursor-not-allowed"
              : "bg-zinc-800"
          }`}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-zinc-400">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className={`px-4 py-2 rounded ${
            page === totalPages
              ? "bg-zinc-700 text-zinc-500 cursor-not-allowed"
              : "bg-blue-500"
          }`}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};
