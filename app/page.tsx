"use client";

import { useState } from "react";
import ArticlesSection from "./components/article";

export default function Home() {
  //  const categories = ["All", "Film", "Tech", "Facts"];

  //   const articles = [
  //     { id: 1, title: "GTA 6 Leak", desc: "Map details leaked online", category: "Tech" },
  //     { id: 2, title: "From Monsters Theory", desc: "Hidden story explained", category: "Film" },
  //     { id: 3, title: "Red Sea Mystery", desc: "Strange natural event", category: "Facts" },
  //     { id: 4, title: "AI Tool Boom", desc: "New AI tools changing world", category: "Tech" },
  //     { id: 5, title: "Movie Secret Scene", desc: "Hidden ending explained", category: "Film" },
  //     { id: 6, title: "Brain Facts", desc: "How memory really works", category: "Facts" },
  //     { id: 7, title: "Cyber Attack Rise", desc: "Hackers are evolving", category: "Tech" },
  //     { id: 8, title: "Netflix Hidden Codes", desc: "Secret categories exist", category: "Film" },
  //     { id: 9, title: "Ocean Mystery", desc: "Unknown sea signals detected", category: "Facts" },
  //     { id: 10, title: "AI Future Jobs", desc: "What jobs will disappear", category: "Tech" },
  //     { id: 11, title: "Film Theory Shock", desc: "Big twist revealed", category: "Film" },
  //   ];

  //   const [page, setPage] = useState(1);
  //   const [selectedCategory, setSelectedCategory] = useState("All");

  //   const perPage = 10;

  //   // FILTER
  //   const filtered =
  //     selectedCategory === "All"
  //       ? articles
  //       : articles.filter((a) => a.category === selectedCategory);

  //   const totalPages = Math.ceil(filtered.length / perPage);

  //   const start = (page - 1) * perPage;
  //   const currentArticles = filtered.slice(start, start + perPage);

  return (
    <div className="text-white font-mono">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/15794-266811402_medium.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        {/* Navbar */}
        <div className="absolute top-0 w-full flex justify-between items-center p-4 z-10">
          <img src="/logo.png" className="w-12 h-12 rounded-full" />

          <div className="flex gap-8 text-sm">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#">Articles</a>
          </div>

          <a className="px-5 py-1 bg-blue-500 rounded-full">Contact</a>
        </div>

        {/* Hero Text */}
        <h1 className="text-8xl font-bold z-10">
          <span className="text-blue-500">K</span>UPPIYA
        </h1>

        <p className="text-zinc-200 text-sm mt-2 z-10 text-center">
          Your daily bite of facts, tech rumors & hidden stories.
        </p>

        <a className="mt-5 border-2 border-blue-500 px-10 py-2 rounded-full z-10 hover:bg-blue-500 transition">
          Discover Kuppiya
        </a>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-black py-20 px-6 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-blue-500">Kuppiya</span>
        </h1>

        <p className="text-zinc-400 max-w-2xl text-center mb-4">
          Kuppiya is a daily content platform built for quick, interesting, and
          mind-blowing reads.
        </p>

        <p className="text-zinc-400 max-w-2xl text-center mb-4">
          We share facts, tech rumors, film theories, and weird stories from Sri
          Lanka and around the world — all in just a few minutes.
        </p>

        <p className="text-zinc-400 max-w-2xl text-center mb-6">
          Our goal is simple: give you something interesting to read every day
          in less than 5 minutes.
        </p>

        <ul className="text-zinc-400 space-y-2 text-center">
          <li>Film secrets & theories</li>
          <li>Tech rumors & leaks</li>
          <li>Mind-blowing facts</li>
          <li>Free tools & resources</li>
          <li>Crazy Sri Lankan stories</li>
        </ul>

        <p className="mt-10 text-zinc-500 text-sm">
          Stay curious. Stay updated.
        </p>
      </section>
      <ArticlesSection />
      <footer className="bg-black/80 backdrop-blur-md border-t border-zinc-800 text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-white text-2xl font-bold">
              <span className="text-blue-500">K</span>UPPIYA
            </h1>
            <p className="text-sm mt-2">
              Daily facts, tech rumors & hidden stories in just 5 minutes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-white font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Articles</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms
                </a>
              </li>

              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-white font-semibold mb-3">Stay Updated</h2>
            <p className="text-sm">
              Get daily updates of facts, tech rumors, and hidden stories from
              Sri Lanka & the world.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 text-center py-4 text-xs text-zinc-500">
          <p>© 2026 Kuppiya — Stay Curious • Stay Updated</p>

          <p className="mt-1">
            Developed by
            <a className="text-blue-500 font-semibold">Nadeesha Ruwandima</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
