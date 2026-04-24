import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp, titleAnimation } from "../lib/motion";

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden p-5">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/15794-266811402_medium.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="absolute top-0 w-full flex justify-between items-center p-2 lg:p-4 z-10">
        <img src="/icon.png" className="w-12 h-12 rounded-full" />

        <div className="sm:flex gap-8 text-sm hidden">
          <a
            href="/"
            className="relative ransition duration-300
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-white
             after:transition-all after:duration-300
             after:-translate-x-1/2
             hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative ransition duration-300
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-white
             after:transition-all after:duration-300
             after:-translate-x-1/2
             hover:after:w-full"
          >
            About
          </a>
          <a
            href="#articles"
            className="relative ransition duration-300
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-white
             after:transition-all after:duration-300
             after:-translate-x-1/2
             hover:after:w-full"
          >
            Articles
          </a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="flex sm:hidden">
            {isOpen ? (
              <MdClose
                size={30}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            ) : (
              <MdMenu
                size={30}
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            )}
          </div>
          <a
            href="#contact"
            className="px-5 py-1 bg-blue-500 rounded-full hover:bg-blue-700 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hero Text */}
      <motion.h1
        variants={titleAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-6xl lg:text-8xl font-bold z-10"
      >
        <span className="text-blue-500">K</span>UPPIYA
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-zinc-200 text-sm mt-2 z-10 text-center"
      >
        Your daily bite of facts, tech rumors & hidden stories.
      </motion.p>

      <motion.a
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        href="#about"
        className="mt-5 border-2 border-blue-500 px-5 py-2 rounded-full z-10 hover:bg-blue-500 transition"
      >
        Discover Kuppiya
      </motion.a>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/60 backdrop-blur-lg flex flex-col items-center gap-6 py-10 z-50">
          <a href="/" onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#articles" onClick={() => setIsOpen(false)}>
            Articles
          </a>
        </div>
      )}
    </section>
  );
};
