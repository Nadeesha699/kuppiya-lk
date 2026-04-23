import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-black py-20 px-6 flex flex-col items-center"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl font-bold mb-6 w-full text-center"
      >
        About <span className="text-blue-500">Kuppiya</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-zinc-400 max-w-2xl text-center mb-4"
      >
        Kuppiya is a daily content platform built for quick, interesting, and
        mind-blowing reads.
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-zinc-400 max-w-2xl text-center mb-4"
      >
        We share facts, tech rumors, film theories, and weird stories from Sri
        Lanka and around the world — all in just a few minutes.
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-zinc-400 max-w-2xl text-center mb-6"
      >
        Our goal is simple: give you something interesting to read every day in
        less than 5 minutes.
      </motion.p>

      <motion.ul
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-zinc-400 space-y-2 text-center"
      >
        <li>Film secrets & theories</li>
        <li>Tech rumors & leaks</li>
        <li>Mind-blowing facts</li>
        <li>Free tools & resources</li>
        <li>Crazy Sri Lankan stories</li>
      </motion.ul>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 text-zinc-500 text-sm"
      >
        Stay curious. Stay updated.
      </motion.p>
    </section>
  );
};
