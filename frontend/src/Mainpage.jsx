import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import EducationTimeline from "./components/VerticalTimeline";
import SkillsCarousel from "./components/SkillsCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import Me from "./components/Me.jsx";
import ContactMe from "./components/ContactMe.jsx";
import ProjectD from "./components/ProjectDisplay.jsx";

const Mainpage = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  // Using useScroll to get scrollYProgress for scroll-based animations
  const { scrollYProgress } = useScroll();

  // Transform scrollYProgress to create smooth animations for opacity and x/y movements
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Keep opacity always 1
  const yNavbar = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yMe = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xSkillsSection = useTransform(scrollYProgress, [0, 1], [-100, 0]); // Move more to the left
  const xEducationTimeline = useTransform(scrollYProgress, [0, 1], [300, 0]); // Move more to the right
  const xSkillsCarousel = useTransform(scrollYProgress, [0, 1], [-500, 0]); // Slide from left for SkillsCarousel
  const xContactMe = useTransform(scrollYProgress, [0, 1], [300, 0]);
  return (
    <>
      {/* Navbar: Fade-in and move up as you scroll */}
      <motion.div
        style={{
          opacity: opacity,
          y: yNavbar,
        }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
      </motion.div>

      {/* Me: Fade-in and move up as you scroll */}
      <motion.div
        style={{
          opacity: opacity,
          y: yMe,
        }}
        transition={{ duration: 0.6 }}
      >
        <Me />
      </motion.div>

      {/* SkillsSection: Scroll-triggered animation */}
      <motion.div
        style={{
          opacity: opacity,
          x: xSkillsSection,
        }}
        transition={{ duration: 0.6 }}
      >
        <SkillsSection />
      </motion.div>

      {/* EducationTimeline: Scroll-triggered animation */}
      <motion.div
        style={{
          opacity: opacity,
          x: xEducationTimeline,
        }}
        transition={{ duration: 0.6 }}
      >
        <EducationTimeline />
      </motion.div>

      {/* SkillsCarousel: Scroll-triggered animation */}
      <motion.div
        style={{
          opacity: opacity,
          x: xSkillsCarousel,
        }}
        transition={{ duration: 0.6 }}
      >
        <SkillsCarousel />
      </motion.div>

      <motion.div
        style={{
          opacity: opacity,
          x: xContactMe,
        }}
        transition={{ duration: 0.6 }}
      >
        <ContactMe />
      </motion.div>
      <motion.div
        style={{
          opacity: opacity,
          x: xContactMe,
        }}
        transition={{ duration: 0.6 }}
      >
        <ProjectD />
      </motion.div>
    </>
  );
};

export default Mainpage;
