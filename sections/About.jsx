"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The Metaverse</span>{" "}
        represents the next step in the evolution of online interaction. Prior
        to the COVID-19 epidemic, online communities had already begun to
        displace their in-person counterparts.
        <span className="font-extrabold text-white">The virtual world</span>, in
        contrast to the real one, has not only survived but expanded while the
        real one has remained static. Really, business is flourishing. The
        growth of the metaverse is one of the transformations that our culture
        will undergo. Moreover,
        <span className="font-extrabold text-white">2.5 billion</span>{" "}
        individuals were using virtual meeting spaces in 2020, with Zoom, Teams,
        and Google Meet leading the way.
      </motion.p>
      <motion.img
        variants={fadeIn('up','tween',0.3,1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
