"use client"
import { CornerRightUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title?: string;
  description?: string;
  image?: string;
  index?: number;
}

const ExperienceCard = ({title, description, image, index = 0}: ExperienceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group px-4 sm:px-6 py-5 sm:py-7 max-w-[400px] w-full bg-[#232020] hover:bg-[#273043] transition-all duration-300 flex-center flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-[#EDF0DA]/5"
    >
      <div className="flex-[1] w-full flex-center flex-col">
        <div className="h-full w-full flex items-start justify-between gap-3 sm:gap-5">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight"
          >
            {title || 'missing'}
          </motion.h1>
          <motion.div 
            whileHover={{ rotate: -45 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 sm:p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors"
          >
            <CornerRightUp
              color="white"
              className="h-5 w-5 sm:h-6 sm:w-6 opacity-75 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </div>
        <span className="h-[1px] w-full bg-white/10 my-4 sm:my-5"></span>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: (index * 0.1) + 0.3 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed"
        >
          {description || 'missing'}
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: (index * 0.1) + 0.4 }}
        viewport={{ once: true }}
        className="w-full mt-2"
      >
        <Image 
          src={image || '/'} 
          alt={title || 'Experience image'} 
          width={1920} 
          height={1080} 
          className="w-full h-[150px] sm:h-[200px] rounded-xl sm:rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-300" 
        />
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
