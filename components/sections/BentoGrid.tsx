"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { HeroCard } from "./HeroCard";
import { ProfileCard } from "./ProfileCard";
import { ProjectCard } from "./ProjectCard";
import { TechStackCard } from "./TechStackCard";
import { ExperienceCard } from "./ExperienceCard";
import { ContactCard } from "./ContactCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function BentoGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-12 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
    >
      {/* 1. Hero Card: High impact presentation (8 cols on desktop) */}
      <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
        <HeroCard />
      </motion.div>

      {/* 2. Profile Card: Bio & Craft (4 cols on desktop, full width on tablets/mobile) */}
      <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4">
        <ProfileCard />
      </motion.div>

      {/* 3. Tech Stack Card: Full width interactive marquee (12 cols) */}
      <motion.div variants={itemVariants} className="col-span-12">
        <TechStackCard />
      </motion.div>

      {/* 4. Featured Project: Hogareño (12 cols) */}
      <motion.div variants={itemVariants} className="col-span-12">
        <ProjectCard />
      </motion.div>

      {/* 5. Experience Card: Track Record (6 cols on tablet/desktop) */}
      <motion.div variants={itemVariants} className="col-span-12 md:col-span-6 lg:col-span-6">
        <ExperienceCard />
      </motion.div>

      {/* 6. Contact & Socials Card (6 cols on tablet/desktop) */}
      <motion.div variants={itemVariants} className="col-span-12 md:col-span-6 lg:col-span-6">
        <ContactCard />
      </motion.div>
    </motion.div>
  );
}
