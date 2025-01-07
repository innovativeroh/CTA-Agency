"use client"
import React from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-10 md:py-20 bg-gradient-to-b from-[#232020] to-[#273043]"
    >
      <main className="max-w-[95%] md:max-w-[90%] m-auto bg-[#273043] rounded-2xl md:rounded-3xl border border-[#EDF0DA]/10 shadow-2xl">
        <div className="px-4 md:px-8 py-8 md:py-16 w-full flex-center flex-col gap-5">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full flex-start"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Our Expertise
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full flex-end"
            >
              <p className="text-base sm:text-lg text-neutral-400 font-normal text-left max-w-full md:max-w-[400px] leading-relaxed">
                Transform ideas into reality by combining creativity, strategy,
                and expertise to deliver exceptional results.
              </p>
            </motion.div>
          </div>

          <motion.span 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[1px] w-full bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 my-8 md:my-12"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center justify-items-center gap-4 md:gap-8"
          >
            <ExperienceCard
              index={0}
              title="Market Research"
              description="Dive deep into data to uncover insights that unlock your business potential. Our research-driven strategies help you stay ahead of the competition."
              image="/market research.jpg"
            />
            <ExperienceCard
              index={1}
              title="Ads Production"
              description="From ideation to execution, we design and produce campaigns that not only capture attention but deliver measurable results."
              image="/Ads Production.jpg"
            />
            <ExperienceCard
              index={2}
              title="Branding Strategies"
              description="Crafting identities that resonate. We shape branding narratives that connect emotionally and inspire trust."
              image="/Branding Strategies.jpg"
            />
            <ExperienceCard
              index={3}
              title="Web Development & Design"
              description="We bring your ideas to life by designing and optimizing websites that perform as good as they look. Whether you're starting from scratch or need upgrades, we've got you covered."
              image="/market research.jpg"
            />
          </motion.div>
        </div>
      </main>
    </motion.section>
  );
};

export default ExperienceSection;
